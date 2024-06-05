const router = require("express").Router();

const {
  createUser,
  loginUser,
  isExistUser,
} = require("../controllers/auth.controller");

router.post("/user/login", loginUser);
router.get("/user/varify/:email", isExistUser);
router.post("/user/create", createUser);

module.exports = router;
