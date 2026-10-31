const express = require("express");

const router = express.Router();

const { createInquiry } = require("../controllers/inquiryController");

// POST route to create a new project inquiry.
router.post("/", createInquiry);

module.exports = router;
