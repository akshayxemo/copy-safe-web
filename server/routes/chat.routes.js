const { createChat, getChats } = require("../controllers/chat.controller");

const router = require("express").Router();

router.post("/send", createChat);
router.get("/find/:chatId", getChats);

module.exports = router;
