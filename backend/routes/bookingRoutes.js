const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");


// Create Booking

router.post("/", async (req, res) => {

  try {

    const {
      user,
      projectName,
      projectLocation,
      projectPrice,
      projectImage,
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

      projectImage,

      customerName,

      customerEmail,

      customerPhone,

      visitDate,

    });


    await newBooking.save();


    res.status(201).json({

      message:
        "Booking created successfully",

      booking:
        newBooking,

    });


  } catch (error) {

    console.log(
      "Booking error:",
      error
    );


    res.status(500).json({

      message:
        "Failed to create booking",

      error:
        error.message,

    });

  }

});



// Get User Bookings

router.get("/user/:userId", async (req, res) => {

  try {

    const bookings = await Booking.find({
      user: req.params.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(bookings);

  } catch (error) {

    console.log(
      "Fetch bookings error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch bookings",
    });

  }

});



// Delete Booking

router.delete(
  "/:bookingId",

  async (req, res) => {

    try {

      const booking =
        await Booking.findByIdAndDelete(
          req.params.bookingId
        );


      if (!booking) {

        return res.status(404).json({

          message:
            "Booking not found",

        });

      }


      res.status(200).json({

        message:
          "Booking cancelled successfully",

      });


    } catch (error) {

      console.log(
        "Delete booking error:",
        error
      );


      res.status(500).json({

        message:
          "Failed to cancel booking",

      });

    }

  }

);


module.exports = router;