const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    projectType: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    timeline: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
