const axios = require("axios");
const Chat = require("../models/chat.model");
const User = require("../models/user.model");
const { default: mongoose } = require("mongoose");

module.exports = {
  createChat: async (req, res) => {
    try {
      const { abstract, userId, chatId } = req.body;
      console.log(abstract, userId);
      const { data } = await axios.post(
        `${process.env.AI_SERVER}/api/standard`,
        { sentence: abstract }
      );
      console.log("AI response", data);
      let chat;

      if (!data.success) {
        return res
          .status(500)
          .send({ error: true, message: "AI response error" });
      }

      chat = await Chat.findOne({ _id: chatId });
      if (chat) {
        chat.chats.push({
          message: abstract,
          response: data.results.map((res) => {
            return {
              title: res.title,
              abstract: res.abstract,
              aclId: res.acl_id,
              corpusId: res.corpus_paper_id,
              citation: res.numcitedby,
              year: res.year,
              url: res.url,
              matchScore: res.cos_similarities,
            };
          }),
        });
      } else {
        let query = { authId: userId };
        if (mongoose.Types.ObjectId.isValid(userId)) {
          query = { _id: userId };
        }

        const user = await User.findOne(query).select("_id").lean();
        // console.log(Id, chatId);
        chat = new Chat({
          _id: chatId,
          user: user._id,
          chats: [
            {
              message: abstract,
              response: data.results.map((res) => {
                return {
                  title: res.title,
                  abstract: res.abstract,
                  aclId: res.acl_id,
                  corpusId: res.corpus_paper_id,
                  citation: res.numcitedby,
                  year: res.year,
                  url: res.url,
                  matchScore: res.cos_similarities,
                };
              }),
            },
          ],
        });
      }
      await chat.save();

      console.log(chat);

      res.status(200).send({ message: "Sucess", data: chat });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ error: true, message: "Internal Server Error" });
    }
  },

  getChats: async (req, res) => {
    try {
      const { chatId } = req.params;
      console.log(chatId);
      const chat = await Chat.findOne({ _id: chatId });
      if (!chat) {
        return res.status(404).send({ error: true, message: "no chats found" });
      }

      return res
        .status(200)
        .send({ error: false, message: "chats found", data: chat.chats });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ error: true, message: "Internal Server Error" });
    }
  },
};
