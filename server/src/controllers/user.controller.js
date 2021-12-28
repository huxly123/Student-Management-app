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

router.get("/", async (req, res) => {

  try {
    const page = req.query.page || 1;
    const size = req.query.size || 3;

    const totalUserCount = await User.find().countDocuments().lean().exec();
    const totalPages = Math.ceil(totalUserCount / size);
    const offset = (page - 1) * size;
    const user = await User.find().skip(offset).limit(size).lean().exec();
    return res.status(200).send({user,totalPages})
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
