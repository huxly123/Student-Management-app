const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const authorize = require("../middlewares/authorize");
const authenticate = require("../middlewares/authenticate");
///authorize,
// router.post("/", async (req, res) => {
//   try {
//     const data = await User.create(req.body);
//     return res.status(200).send(data);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });

router.get("/",authenticate,authorize(), async (req, res) => {
  try {
    const data = await User.find();
    return res.status(200).send(data);
  } catch (err) {
     console.log(err.message);
    return res.status(400).send(err.message);
   
  }
});


router.get("/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
      return res.status(200).send(data)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
