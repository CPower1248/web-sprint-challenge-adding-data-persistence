exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { 
          resource_name: "Canvas", 
          resource_description: "Learning platform."
        },
        { 
          resource_name: "Google", 
          resource_description: "It's not about having all the answers, it's about knowing where to find them."
        }
      ]);
    });
};
