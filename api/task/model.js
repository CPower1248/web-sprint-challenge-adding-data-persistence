const db = require("../../data/db-config")
const helpers = require("../middleware/helpers")

module.exports = {
  findAll,
  insert
}

function findAll() {
  return db("tasks as t")
    .join("projects as p")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name", 
      "p.project_description"
    )

  // let query = db("tasks as t")
  //   .join("projects as p")
  //   .select(
  //     "t.task_id",
  //     "t.task_description",
  //     "t.task_notes",
  //     "t.task_completed",
  //     "p.project_name", 
  //     "p.project_description"
  //   )

  // return query.then(tasks => {
  //   return tasks.map(task => helpers.taskToBody(task))
  // })
}

function insert(body) {
  return db("tasks").insert(body)
    .then(([id]) => {
      return db("tasks").where({ task_id: id }).first()
    })
}
