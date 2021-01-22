const db = require("../../data/db-config")

module.exports = {
  findAll,
  insert
}

function findAll() {
  return db("projects")
}

function insert(body) {
  return db("projects").insert(body)
    .then(([id]) => {
      return db("projects").where({ project_id: id }).first()
    })
}
