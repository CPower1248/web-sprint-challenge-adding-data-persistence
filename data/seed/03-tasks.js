exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { 
          task_description: "Install dependencies", 
          task_notes: "npm i (etc.).",
          task_completed: 1,
          project_id: 1
        },
        { 
          task_description: "Set up migrations and seeds", 
          task_notes: "Config knexfile.js, run 'npx knex migrate:make migration-name' and 'npx knex seed:make seed-name'. Next run 'npm migratelatest' then 'npm seedrun'.",
          task_completed: 1,
          project_id: 1
        },
        { 
          task_description: "Stretch task 1", 
          task_notes: "Add an endpoint to get a list of project resources.",
          task_completed: 0,
          project_id: 2
        },        { 
          task_description: "Stretch task 2", 
          task_notes: "Add an endpoint to get a list of project tasks.",
          task_completed: 0,
          project_id: 2
        },        { 
          task_description: "Stretch task 3", 
          task_notes: "Add an endpoint to see all projects using a particular resource.",
          task_completed: 0,
          project_id: 2
        }
      ]);
    });
};
