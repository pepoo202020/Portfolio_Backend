const express = require("express");
const {
  createSkillCategory,
  getAllSkillsCategories,
  updateSkillCategory,
  deleteSkillCategory,
} = require("../controllers/SkillsCates.controller");

const skillCatesRoutes = express.Router();

skillCatesRoutes.get("/", (req, res) => {
  res.send("test skill categories routes");
});

skillCatesRoutes.post("/new", createSkillCategory);
skillCatesRoutes.get("/all", getAllSkillsCategories);
skillCatesRoutes.put("/:id", updateSkillCategory);
skillCatesRoutes.delete("/:id", deleteSkillCategory);

module.exports = skillCatesRoutes;
