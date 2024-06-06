const router = require("express").Router();

const {
  createUser,
  loginUser,
  isExistUser,
  updateUserAuthId,
} = require("../controllers/auth.controller");

router.post("/user/login", loginUser);
router.get("/user/varify/:email", isExistUser);
router.post("/user/create", createUser);
router.put("/user/update-authid/:email", updateUserAuthId);

module.exports = router;
