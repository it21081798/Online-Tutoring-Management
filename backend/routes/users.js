const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.get("/getuser/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
    .select("-password")
    .populate({ path: "myCourses.courseId" })

    .exec();

  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "email"]));
});

router.post("/enroll/:id", async (req, res) => {
  const { courseId, language } = req.body;

  const user = await User.findById(req.params.id);

  if (!user) return res.status(400).send("User does not exist.");

  user.myCourses.push({ courseId, language });

  await user.save();

  res.send(user);
});

router.get("/enroll/:id", async (req, res) => {
  const { courseId } = req.body;

  const user = await User.findById(req.params.id);

  if (!user) return res.status(400).send("User does not exist.");

  user.myCourses.push(courseId);

  await user.save();

  res.send(user);
});

router.delete("/enroll/:id/:course", async (req, res) => {
  const { courseId } = req.body;

  console.log(req.params.course);

  const user = await User.findById(req.params.id);

  if (!user) return res.status(400).send("User does not exist.");

  const indexOfObject = user.myCourses.findIndex((object) => {
    return object._id === req.params.course;
  });

  console.log(indexOfObject); // 👉️ 1

  user.myCourses.splice(indexOfObject, 1);

  await user.save();

  res.send("course removed");
});

module.exports = router;
