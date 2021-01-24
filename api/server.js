const express = require("express")
const server = express()
server.use(express.json())

const projectsRouter = require("./project/router")
const resourcesRouter = require("./resource/router")
const tasksRouter = require("./task/router")
const project_resourcesRouter = require("./project_resources/router")

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)
server.use("/api/project_resources", project_resourcesRouter)

server.use((error, req, res, next) => {
  res.status(500).json({ 
    error: "There was a problem communicating with the server",
    message: error.message,
    stack: error.stack
  })
})

module.exports = server
