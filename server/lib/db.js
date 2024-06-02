const mongoose = require("mongoose");
const dbConnect = () => {
  try {
    if (process.env.DB_URI == null) {
      console.log("No URI specified...");
      throw new Error("No URI specified.");
    }
    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("[mongodb]: database connection established successfully");
    });
  } catch (error) {
    // console.log("[mongodb]: connection Failed...", error);
    throw new Error(`[mongodb]: connection Failed. ${error.message}`);
  }
};

module.exports = dbConnect;
