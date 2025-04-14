// routes/feedbackRoutes.js

const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router();

// Route to submit feedback
router.post("/submit-feedback", async (req, res) => {
  const { name, email, feedback, rating } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, feedback, rating });
    await newFeedback.save();
    res.status(200).json({ message: "Feedback submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit feedback." });
  }
});

module.exports = router;
