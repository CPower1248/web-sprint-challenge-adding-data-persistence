exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { 
          project_name: "Sprint Challenge", 
          project_description: "Adding data persistence"
        },
        { 
          project_name: "-test-project1-test-", 
          project_description: "-test-foobar-test-"
        }
      ]);
    });
};
