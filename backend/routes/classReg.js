const express = require("express");
const ClassReg = require("../models/classReg");

const router = express.Router();

router.post("/post/save", (req, res) => {
  let newClassReg = new ClassReg(req.body);

  newClassReg.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "class Reg Saved Successfully",
    });
  });
});

module.exports = router;
