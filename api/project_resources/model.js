const db = require("../../data/db-config")
// const helpers = require("../middleware/helpers")

module.exports = {
  findAll
}

function findAll() {
  return db("project_resources")
}
