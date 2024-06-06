const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
module.exports = {
  updateUserAuthId: async (req, res) => {
    try {
      const { email } = req.params;
      const { authId, image } = req.body;
      console.log("update", req.body);
      const updateUser = await User.updateOne(
        { email: email },
        { $set: { authId: authId, image: image } }
      );
      console("updated", updateUser);
      if (updateUser) {
        return res
          .status(200)
          .send({ data: updateUser, error: false, message: "user updated." });
      } else throw new Error("User not updated.");
    } catch (error) {
      return res
        .status(500)
        .send({ data: null, error: true, message: "something went wrong." });
    }
  },
  isExistUser: async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({ email: email }).lean();
      if (!user) {
        return res
          .status(400)
          .send({ data: null, error: true, message: "user not found." });
      }
      return res
        .status(200)
        .send({ data: user, error: false, message: "user exist." });
    } catch (error) {
      return res
        .status(500)
        .send({ data: null, error: true, message: "something went wrong." });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email }).lean();

      if (!user) {
        return res
          .status(400)
          .send({ data: null, error: true, message: "user not found." });
      }

      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        return res
          .status(401)
          .send({ data: null, error: true, message: "unauthorized." });
      }

      return res
        .status(200)
        .send({ data: user, error: false, message: "authorized." });
    } catch (error) {
      return res
        .status(500)
        .send({ data: null, error: true, message: "something went wrong." });
    }
  },

  createUser: async (req, res) => {
    try {
      const { name, email, password, authId, image } = req.body;
      console.log(req.body);
      const existUser = await User.findOne({ email: email }).lean();
      if (existUser) {
        return res
          .status(400)
          .send({ data: null, error: true, message: "user already exists." });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        authId: authId ? authId : "",
        image: image ? image : "",
        subscription: "Free",
      });

      const savedUser = await newUser.save();

      if (!savedUser) {
        console.log("user creation failed.");
        throw new Error("user creation failed.");
      }
      return res.status(201).send({
        data: newUser,
        error: false,
        message: "new user successfully created.",
      });
    } catch (error) {
      return res
        .status(500)
        .send({ data: null, error: true, message: "something went wrong." });
    }
  },
};
