exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { 
          task_description: "Install dependencies", 
          task_notes: "Run 'npm i knex excell sqlite3' and 'npm i -D nodemon'.",
          task_completed: 1,
          project_id: 1
        },
        { 
          task_description: "Write scripts", 
          task_notes: "package.json scripts 'migratelatest', 'migraterollback' and 'seeddb'.",
          task_completed: 1,
          project_id: 1
        },
        { 
          task_description: "Config migrations and seeds", 
          task_notes: "Config knexfile.js, run 'npx knex migrate:make migration-name' and 'npx knex seed:make seed-name'.",
          task_completed: 1,
          project_id: 1
        },
        { 
          task_description: "Run migrations and seeds", 
          task_notes: "Run 'npm run migratelatest' then 'npm run seeddb'.",
          task_completed: 1,
          project_id: 1
        },
        {
          task_description: "Config server to listen on port", 
          task_notes: "Config index.js and server.js.",
          task_completed: 1,
          project_id: 1
        },
        {
          task_description: "Config routers, models, middleware and helpers", 
          task_notes: "Build API functionality.",
          task_completed: 1,
          project_id: 1
        },
        { 
          task_description: "EP Project Resources", 
          task_notes: "Add an endpoint to get a list of project resources.",
          task_completed: 0,
          project_id: 2
        },        { 
          task_description: "EP Project Tasks", 
          task_notes: "Add an endpoint to get a list of project tasks.",
          task_completed: 0,
          project_id: 2
        },        { 
          task_description: "EP Resource Projects",
          task_notes: "Add an endpoint to see all projects using a particular resource.",
          task_completed: 0,
          project_id: 2
        }
      ]);
    });
};
