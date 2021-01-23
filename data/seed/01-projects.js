exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { 
          project_name: "Sprint Challenge", 
          project_description: "Adding Data Persistence",
          project_completed: 1
        },
        { 
          project_name: "Stretch", 
          project_description: "The stretch tasks from the sprint.",
          project_completed: 0
        }
      ]);
    });
};
