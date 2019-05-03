const db = require('../dbConfig');

module.exports = {
 get,
 add,
 getId,
};

function get() {
 return db('project');
}
// function getId(id) {
//  return db('project')
//   .where({ 'project.id': id })
//   .first();
// }
function getId(id) {
 return db('project')
  .join('action', 'project.id', '=', 'action.project_id')
  .select('project.*', { action: 'action.description' })
  .where({ 'project.id': id });
}
function add(body) {
 return db('project')
  .insert(body)
  .then(id => {
   return getId(id[0]);
  });
}
