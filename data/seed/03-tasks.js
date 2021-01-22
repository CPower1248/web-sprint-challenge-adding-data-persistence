exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { 
          task_description: "Finish Sprint Challenge", 
          task_notes: "Your brain will hurt",
          project_id: 1
        },
        { 
          task_description: "-test-taskDescription1-test-", 
          task_notes: "-test-loremIpsum-test",
          project_id: 2
        }
      ]);
    });
};
