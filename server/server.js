const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const inquiryRoutes = require("./src/routes/inquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Cynbit Backend is running!");
});

// Inquiry API route
app.use("/api/inquiries", inquiryRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
