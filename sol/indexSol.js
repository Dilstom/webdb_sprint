const express = require('express');

const db = require('./database/config');

const server = express();

server.get('/', (req, res) => {
 res.json({ api: 'running...' });
});

server.get('/projects', (req, res) => {
 db('projects')
  .then(projects => {
   res.status(200).json(projects);
  })
  .catch(err => res.json(err));
});

server.get('/projects/:id', (req, res) => {
 const { id } = req.params;

 db('projects')
  .where({ id })
  .first()
  .then(project => {
   if (project) {
    // grab the project
    db('actions')
     .where({ project_id: id })
     .then(actions => {
      project.actions = actions; // get the actions for that project
      // and assign that object to the project new key 'actions'
      res.status(200).json(project);
     })
     .catch(err => res.json(err));
   } else {
    res.status(404).json({ message: 'project not found' });
   }
  })
  .catch(err => res.json(err));
});

server.get('/actions', (req, res) => {
 db('actions')
  .then(actions => {
   res.status(200).json(actions);
  })
  .catch(err => res.json(err));
});

server.listen(8000, () => console.log(' api running '));
