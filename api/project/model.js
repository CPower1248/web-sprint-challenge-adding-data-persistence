const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  insert
}

function findAll(id) {
  let query = db("projects")

  if (id) {
    const project = query.where("project_id", id).first()

    return project.then(project => {
        return helpers.projectToBody(project)
      })
  } else {
    return query.then(projects => {
      return projects.map(project => helpers.projectToBody(project))
    })
  }
}

function insert(body) {
  let query = db("projects").insert(body)
    .then(([id]) => {
      return db("projects").where({ project_id: id }).first()
    })

  return query.then(project => helpers.projectToBody(project))
}
