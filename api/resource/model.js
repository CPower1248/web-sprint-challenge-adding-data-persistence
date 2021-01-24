const db = require("../../data/db-config")

module.exports = {
  findAll,
  insert
}

function findAll(id) {
  let query = db("resources as r")

  if (id) {
    return query.where("resource_id", id).first()
  } else {
    return query
  }
}

function insert(body) {
  return db("resources").insert(body)
    .then(([id]) => {
      return db("resources").where({ resource_id: id }).first()
    })
}
