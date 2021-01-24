const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  insert
}

function findAll(id) {
  let query = db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name", 
      "p.project_description"
    )
  
  if (id) {
    const task = query.where("task_id", id).first()

    return task.then(task => {
      return helpers.taskToBody(task)
    })
  } else {
    return query.then(tasks => {
      return tasks.map(task => helpers.taskToBody(task))
    })
  }
}

function insert(body) {
  return db("tasks").insert(body)
    .then(([id]) => {
      const query = db("tasks").where({ task_id: id }).first()

      return query.then(task => helpers.taskToBody(task))
    })
}
