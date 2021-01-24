const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  insert
}

function findAll() {
  let query = db("project_tasks as pt")
    .leftJoin("projects as p", "pt.project_id", "p.project_id")
    .leftJoin("tasks as t", "pt.task_id", "t.task_id")
    .orderBy("p.project_id").orderBy("t.task_id")
  
  return query.then(project_tasks => {
    return project_tasks.map(project_task => helpers.project_taskToBody(project_task))
  })
}

function insert(body) {
  let query = db("project_tasks").insert(body)
    .then(([id]) => {
      return db("project_tasks as pt")
      .leftJoin("projects as p", "pt.project_id", "p.project_id")
      .leftJoin("tasks as t", "pt.task_id", "t.task_id")
      .where("pt.project_task_id", id).first()
    })

  return query.then(newProjectTask => helpers.project_taskToBody(newProjectTask))
}
