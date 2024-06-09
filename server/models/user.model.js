const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    authId: { type: String },
    subscription: { type: String, required: true },
    subToken: { type: String },
    chatId: {
      type: Schema.ObjectId,
      required: true,
      unique: true,
      default: () => new mongoose.Types.ObjectId(),
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
