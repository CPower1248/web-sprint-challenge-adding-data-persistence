const express = require("express")
const router = express.Router()

const Projects = require("./model")

const { valProject } = require("../middleware")

router.get("/", (req, res, next) => {
  try {
    Projects.findAll()
      .then(projects => {
        res.status(200).json(projects)
      })
      .catch(err => {
        res.status(400).json({ 
          message: "No projects found", 
          error: err.message
        })
      }) 
  } catch (err) {
    next(err)
  }
})

router.post("/", valProject, (req, res, next) => {
  const { body } = req

  try {
    Projects.insert(body)
      .then(newProject => {
        res.status(200).json(newProject)
      })
      .catch(err => {
        res.status(400).json({
          message: "Project could not be created",
          error: err.message
        })
      })
  } catch (err) {
    next(err)
  }
})

module.exports = router
