const router = require("express").Router();

const { createUser, getUser } = require("../controllers/auth.controller");

router.get("/user", getUser);
router.post("/user/create", createUser);

module.exports = router;
