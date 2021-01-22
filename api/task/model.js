const db = require("../../data/db-config")

module.exports = {
  findAll,
  insert
}

function findAll() {
  return db("tasks")
}

function insert(body) {
  return db("tasks").insert(body)
    .then(([id]) => {
      return db("tasks").where({ task_id: id }).first()
    })
}
