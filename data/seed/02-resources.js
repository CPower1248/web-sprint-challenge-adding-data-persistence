exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { 
          resource_name: "Canvas", 
          resource_description: "Learning platform"
        },
        { 
          resource_name: "-test-resource1-test-", 
          resource_description: "-test-bazbiz-test-"
        }
      ]);
    });
};
