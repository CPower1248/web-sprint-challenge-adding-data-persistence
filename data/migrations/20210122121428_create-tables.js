exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("project_id")
      tbl.string("project_name").notNullable()
      tbl.string("project_description")
      tbl.boolean("project_completed").notNullable()
        .defaultTo(0)    
    })
    .createTable("resources", tbl => {
      tbl.increments("resource_id")
      tbl.string("resource_name").notNullable().unique()
      tbl.string("resource_description")
    })
    .createTable("tasks", tbl => {
      tbl.increments("task_id")
      tbl.string("task_description").notNullable()
      tbl.string("task_notes")
      tbl.boolean("task_completed").notNullable()
        .defaultTo(0)
      tbl.integer("project_id").notNullable().unsigned()
        .references("project_id").inTable("projects")
        .onDelete("CASCADE")
    })
    .createTable("project_resources", tbl => {
      tbl.increments("project_resource_id")
      tbl.integer("project_id").notNullable().unsigned()
        .references("project_id").inTable("projects")
        .onDelete("CASCADE")
      tbl.integer("resource_id").notNullable().unsigned()
        .references("resource_id").inTable("resources")
        .onDelete("CASCADE")
    })
    .createTable("project_tasks", tbl => {
      tbl.increments("project_task_id")
      tbl.integer("project_id").notNullable().unsigned()
        .references("project_id").inTable("projects")
        .onDelete("CASCADE")
      tbl.integer("task_id").notNullable().unsigned()
        .references("task_id").inTable("tasks")
        .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
