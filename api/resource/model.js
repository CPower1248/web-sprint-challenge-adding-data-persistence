const db = require("../../data/db-config")

module.exports = {
  findAll,
  insert
}

function findAll() {
  return db("resources")
}

function insert(body) {
  return db("resources").insert(body)
    .then(([id]) => {
      return db("resources").where({ resource_id: id }).first()
    })
}
