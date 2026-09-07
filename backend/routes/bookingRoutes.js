const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const {
      user,
      projectName,
      projectLocation,
      projectPrice,
      customerName,
      customerEmail,
      customerPhone,
      visitDate,
    } = req.body;

    const newBooking = new Booking({
      user,
      projectName,
      projectLocation,
      projectPrice,
      customerName,
      customerEmail,
      customerPhone,
      visitDate,
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });

  } catch (error) {
    console.log("Booking error:", error);

    res.status(500).json({
      message: "Failed to create booking",
      error: error.message,
    });
  }
});

module.exports = router;