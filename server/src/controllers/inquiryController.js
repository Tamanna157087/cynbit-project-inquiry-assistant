const Inquiry = require("../models/Inquiry");

const createInquiry = async (req, res) => {
  try {
    // Get the form data sent by the frontend.
    const { projectType, description, budget, timeline, name, email, company } =
      req.body;

    // Check whether required fields are provided.
    if (
      !projectType ||
      !description ||
      !budget ||
      !timeline ||
      !name ||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Basic email format validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Create a new inquiry using the submitted data.
    const newInquiry = new Inquiry({
      projectType,
      description,
      budget,
      timeline,
      name,
      email,
      company,
    });

    // Save the inquiry in MongoDB.
    const savedInquiry = await newInquiry.save();

    // Send a success response.
    return res.status(201).json({
      success: true,
      message: "Your project inquiry was submitted successfully!",
      data: savedInquiry,
    });
  } catch (error) {
    console.error("Inquiry submission error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your inquiry.",
    });
  }
};

module.exports = { createInquiry };
