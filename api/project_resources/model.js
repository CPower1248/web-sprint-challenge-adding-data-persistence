const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  findResourceProjects,
  insert
}

function findAll(id) {
  let query = db("project_resources as pr")
    .leftJoin("projects as p", "pr.project_id", "p.project_id")
    .leftJoin("resources as r", "pr.resource_id", "r.resource_id")
    .orderBy("p.project_id").orderBy("r.resource_id")

  if (id) {
    const resource = query.where("pr.resource_id", id).first()

    return resource
  } else {
    return query.then(project_resources => {
      return project_resources.map(project_resource => helpers.projectToBody(project_resource))
    })
  }
}

function findResourceProjects(id) {
  let query = db("project_resources as pr")
  .leftJoin("projects as p", "pr.project_id", "p.project_id")
  .leftJoin("resources as r", "pr.resource_id", "r.resource_id")
  .where("pr.resource_id", id)
  .orderBy("r.resource_id").orderBy("p.project_id")

  return query.then(resource_projects => {
    return resource_projects.map(resource_project => helpers.projectToBody(resource_project))
  })
}

function insert(body) {
  let query = db("project_resources").insert(body)
    .then(([id]) => {
      return db("project_resources as pr")
      .leftJoin("projects as p", "pr.project_id", "p.project_id")
      .leftJoin("resources as r", "pr.resource_id", "r.resource_id")
      .where("pr.project_resource_id", id).first()
    })

  return query.then(newProjectResource => helpers.project_resourceToBody(newProjectResource))
}
