// Import necessary modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

// Create an Express app
const app = express();

// Middleware Setup
app.use(cors()); // Enable Cors
app.use(bodyParser.json()); // Parse Json requests
app.use(cookieParser());
// Mongo DB connection setup

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Routes setup
//const SkillRouter = require("./src/routes/skillsRoutes.routes");
const projectsRoutes = require("./src/routes/projectsRoutes.routes");
const adminRoutes = require("./src/routes/AdminRoutes/AdminMainRoute");
const skillCatesRoutes = require("./src/routes/skillCatesRoutes");
const projectCatesRoutes = require("./src/routes/projectCatesRoutes");
// Add other route files as needed...

//app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cates/skills", skillCatesRoutes);
app.use("/api/cates/projects", projectCatesRoutes);
// Use other route files as needed...

app.get("/", (req, res) => {
  res.send("hello from main route");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
