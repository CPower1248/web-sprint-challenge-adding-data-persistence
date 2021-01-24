const express = require("express")
const router = express.Router()

const Project_Tasks = require("./model")

router.get("/", (req, res, next) => {
  try {
    Project_Tasks.findAll()
      .then(project_tasks => {
        res.status(200).json(project_tasks)
      })
      .catch(err => {
        res.status(400).json({ 
            message: "No project tasks found",
            error: err.message
          })
      })
  } catch (err) {
    next(err)
  }
})

router.post("/", (req, res, next) => {
  const { body } = req

  try {
    Project_Tasks.insert(body)
      .then(newProjectTask => {
        res.status(200).json(newProjectTask)
      })
      .catch(err => {
        res.status(400).json({ 
          message: "Could not create new project task",
          error: err.message
        })
      })
  } catch (err) {
    next(err)
  }
})

module.exports = router
