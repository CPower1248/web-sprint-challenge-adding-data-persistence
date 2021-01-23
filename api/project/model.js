const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  insert
}

function findAll() {
  let query = db("projects")

  return query.then(projects => {
    return projects.map(project => helpers.projectToBody(project))
  })
}

function insert(body) {
  let query = db("projects").insert(body)
    .then(([id]) => {
      return db("projects").where({ project_id: id }).first()
    })

  return query.then(project => helpers.projectToBody(project))
}
