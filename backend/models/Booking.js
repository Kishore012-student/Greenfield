const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },


    projectName: {
      type: String,
      required: true,
    },


    projectLocation: {
      type: String,
      required: true,
    },


    projectPrice: {
      type: String,
      required: true,
    },


    projectImage: {
      type: String,
    },


    customerName: {
      type: String,
      required: true,
    },


    customerEmail: {
      type: String,
      required: true,
    },


    customerPhone: {
      type: String,
      required: true,
    },


    visitDate: {
      type: Date,
      required: true,
    },


    status: {
      type: String,
      default: "Pending",
    },


  },

  {
    timestamps: true,
  }
);


const Booking =
  mongoose.model(
    "Booking",
    bookingSchema
  );


module.exports = Booking;