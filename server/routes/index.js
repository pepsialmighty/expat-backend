const express = require("express");

const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let results = await db.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", (req, res, next) => {
  const country = {
    id: req.body.id,
    countryName: req.body.countryName,
    countryIsoCode: req.body.countryIsoCode,
    priorityNumber: req.body.priorityNumber
  };
  res.status(201).json({
    message: "Handling POST request to /countries",
    createdCountry: country
  });
});

module.exports = router;
