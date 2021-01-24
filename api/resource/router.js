const express = require("express")
const router = express.Router()

const Resources = require("./model")

const { valResource } = require("../middleware")

router.get("/", (req, res, next) => {
  try {
    Resources.findAll()
      .then(resources => {
        res.status(200).json(resources)
      })
      .catch(err => {
        res.status(400).json({ 
          message: "No resources found", 
          error: err.message
        })
      }) 
  } catch (err) {
    next(err)
  }
})

router.post("/", valResource, (req, res, next) => {
  const { body } = req

  try {
    Resources.insert(body)
      .then(newResource => {
        res.status(200).json(newResource)
      })
      .catch(err => {
        res.status(400).json({
          message: "Resource could not be created",
          error: err.message
        })
      })
  } catch (err) {
    next(err)
  }
})

module.exports = router
