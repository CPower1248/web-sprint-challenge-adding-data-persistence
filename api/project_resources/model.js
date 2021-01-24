const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  insert
}

function findAll() {
  let query = db("project_resources as pr")
    .leftJoin("projects as p", "pr.project_id", "p.project_id")
    .leftJoin("resources as r", "pr.resource_id", "r.resource_id")
  
  return query.then(project_resources => {
    return project_resources.map(project_resource => helpers.projectToBody(project_resource))
  })
}

function insert(body) {
  let query = db("project_resources").insert(body)
    .then(([id]) => {
      return db("project_resources").where({ project_resource_id: id }).first()
    })

  return query.then(newProjectResource => helpers.project_resourceToBody(newProjectResource))
}
