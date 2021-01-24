const express = require("express")
const router = express.Router()

const Tasks = require("./model")

const { valTask } = require("../middleware")

router.get("/", (req, res, next) => {
  try {
    Tasks.findAll()
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        res.status(400).json({ 
          message: "No tasks found", 
          error: err.message
        })
      }) 
  } catch (err) {
    next(err)
  }
})

router.post("/", valTask, (req, res, next) => {
  const { body } = req

  try {
    Tasks.insert(body)
      .then(newTask => {
        res.status(200).json(newTask)
      })
      .catch(err => {
        res.status(400).json({
          message: "Task could not be created",
          error: err.message
        })
      })
  } catch (err) {
    next(err)
  }
})

module.exports = router
