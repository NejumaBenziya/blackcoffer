const express = require("express");

const router = express.Router();

const Insight = require("../models/DataModel");

router.get("/", async (req, res) => {

  try {

    const data = await Insight.find();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;