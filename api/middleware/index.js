const Projects = require("../project/model")
const Resources = require("../resource/model")

module.exports = {
  valProject,
  valResource,
  valTask,
  valProjectResource
}

function valProject(req, res, next) {
  const { project_name } = req.body

  if (project_name) {
    next()
  } else {
    res.status(400).json({ errorMessage: "Missing required project_name" })
  }
}

function valResource(req, res, next) {
  const { resource_name } = req.body

  if (resource_name) {
    next()
  } else {
    res.status(400).json({ errorMessage: "Missing required resource_name" })
  }
}

async function valTask(req, res, next) {
  try {
    const { task_description, project_id } = req.body

    let query = await Projects.findAll(project_id)

    const val_project_id = query.project_id

    if (task_description && val_project_id) {
      next()
    } else {
      res.status(400).json({ errorMessage: "Missing required task_description and valid project_id" })
    } 
  } catch (err) {
    next(err)
  }
}

async function valProjectResource(req, res, next) {
  try {
    const { project_id, resource_id } = req.body
  
    let queryProject = await Projects.findAll(project_id)
    let queryResource = await Resources.findAll(resource_id)
  
    const valProjectId = queryProject.project_id
    const valResourceId = queryResource.resource_id
   
    if (valProjectId && valResourceId) {
      next()
    } else if (!valProjectId) {
      res.status(400).json({ message: `The project with id ${project_id} could not be found` })
    } else {
      res.status(400).json({ message: `The resource with id ${resource_id} could not be found` })
    }
  } catch (err) {
    next(err)
  }
}
