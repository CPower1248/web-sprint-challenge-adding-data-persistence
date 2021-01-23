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

module.exports = router
