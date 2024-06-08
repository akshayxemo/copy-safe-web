const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  id: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  chats: [
    {
      message: { type: String, required: true },
      response: [
        {
          title: { type: String, required: true },
          abstract: { type: String, required: true },
          aclId: { type: String },
          corpusId: { type: String },
          citation: { type: String },
          year: { type: String },
          url: { type: String },
          matchScore: { type: String },
        },
      ],
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
