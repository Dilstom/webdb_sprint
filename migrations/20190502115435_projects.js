exports.up = function(knex, Promise) {
 return knex.schema
  .createTable('project', function(tbl) {
   tbl.increments();
   tbl
    .string('name')
    .notNullable()
    .unique();
   tbl.string('description').notNullable();
   tbl.boolean('completed').defaultTo('false');
   tbl.timestamps(true, true);
  })
  .createTable('action', function(tbl) {
   tbl.increments();
   tbl.string('description').notNullable();
   tbl.boolean('completed').defaultTo('false');
   tbl
    .integer('project_id')
    .unsigned()
    .references('id')
    .inTable('project')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
   tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('project').dropTableIfExists('action');
};
