exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('project')
  .del()
  .then(function() {
   // Inserts seed entries
   return knex('project').insert([
    {
     name: 'Review the Tk for the next week',
     description: 'Watch the pre-class video and complete all challenges',
    },
   ]);
  });
};
