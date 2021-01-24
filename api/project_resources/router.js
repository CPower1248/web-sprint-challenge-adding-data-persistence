const express = require("express")
const router = express.Router()

const Project_Resources = require("./model")

const { valResourceId } = require("../middleware")

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

router.get("/:id/resource_projects", valResourceId, (req, res, next) => {
  const { id } = req.params

  try{
    Project_Resources.findResourceProjects(id)
      .then(resource_projects => {
        res.status(200).json(resource_projects)
      })
      .catch(err => res.status(400).json({ 
        message: `The resource with id ${id} could not be found`, 
        error: err.message 
      }))
  } catch (err) {
    next(err)
  }
})

module.exports = router
