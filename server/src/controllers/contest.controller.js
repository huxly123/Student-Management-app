const express = require("express");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const router = express.Router();

const Contest=require("../models/contest.model")

router.post("/", async (req, res) => {
    try {
        const data = await Contest.create(req.body);
        return res.status(200).send(data);
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const data = await Contest.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(400).send(data)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const data = await Contest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).send(data)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.delete("/:id", async (req, res) => {
  try {
    const data = await Contest.findByIdAndDelete(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports=router