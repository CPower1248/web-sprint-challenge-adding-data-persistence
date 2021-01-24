const express = require("express")
const router = express.Router()

const Project_Resources = require("./model")

router.get("/", (req, res, next) => {
  try {
    Project_Resources.findAll()
      .then(project_resources => {
        res.status(200).json(project_resources)
      })
      .catch(err => {
        res.status(400).json({ 
            message: "No project resources found",
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
    Project_Resources.insert(body)
      .then(newProjectResource => {
        res.status(200).json(newProjectResource)
      })
      .catch(err => {
        res.status(400).json({ 
          message: "Could not create new project resource",
          error: err.message
        })
      })
  } catch (err) {
    next(err)
  }
})

module.exports = router
