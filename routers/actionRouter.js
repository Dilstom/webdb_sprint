const express = require('express');

const api = express();
api.use(express.json());

const db = require('../data/helpers/actionHelper');

api.get('/', async (req, res) => {
 try {
  const act = await db.get();
  res.status(200).json(act);
 } catch (error) {
  res.status(500).json(error);
 }
});
api.get('/:id', async (req, res) => {
 try {
  const act = await db.get(req.params.id);
  if (act.length > 0) {
   res.status(200).json(act);
  } else {
   res.status(404).json({ message: 'There is no any record with this id' });
  }
 } catch (error) {
  res.status(500).json(error);
 }
});
api.post('/', async (req, res) => {
 try {
  const { description, project_id } = req.body;
  const act = await db.add({ description, project_id });
  res.status(202).json(act);
 } catch (error) {
  res.status(500).json(error);
 }
});

module.exports = api;
