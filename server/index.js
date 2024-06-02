const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 4000;
const dbConnect = require("./lib/db");

app.use(express.json());
app.use(cors());
app.use("/server/auth", require("./routes/auth.routes"));

app.listen(port, () => {
  dbConnect();
  console.log("app is running on port:", port);
});
