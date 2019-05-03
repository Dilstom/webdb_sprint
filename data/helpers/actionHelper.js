const db = require('../dbConfig');

module.exports = {
 get,
 getId,
 add,
};

function get() {
 return db('action');
}
function getId(id) {
 return db('action').where({ id });
}
function add(body) {
 return db('action')
  .insert(body)
  .then(id => {
   return getId(id[0]);
  });
}
