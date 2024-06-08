const axios = require("axios");
const Chat = require("../models/chat.model");

module.exports = {
  createChat: async (req, res) => {
    try {
      const { abstract, userId, chatId } = req.body;
      console.log(abstract);
      const { data } = await axios.post(
        `${process.env.AI_SERVER}/api/standard`,
        { sentence: abstract }
      );
      console.log("AI response", data);
      let chat;

      if (data.success) {
        chat = await Chat.findOne({ id: chatId });
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
          chat = new Chat({
            id: chatId,
            user: userId,
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
      }

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
      const chat = await Chat.findOne({ id: chatId });
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
