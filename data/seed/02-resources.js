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
        },
        {
          resource_name: "CodeGrade",
          resource_description: "Lets you know if the app is funtioning as intended."
        },
        {
          resource_name: "MDN",
          resource_description: "Library"
        },
        {
          resource_name: "W3Schools",
          resource_description: "Library"
        },
        {
          resource_name: "Stack Overflow",
          resource_description: "Library"
        },
        {
          resource_name: "Archive Projects",
          resource_description: "Personal library :D"
        }
      ]);
    });
};
