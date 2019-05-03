const express = require('express');
const api = express();
const projectDb = require('../data/helpers/projectHelper');

api.use(express.json());

api.get('/', async (req, res) => {
 try {
  const proj = await projectDb.get();
  res.status(200).json(proj);
 } catch (error) {
  res.status(500).json(error);
 }
});
api.get('/:id', async (req, res) => {
 try {
  const proj = await projectDb.getId(req.params.id);
  //   if (proj.length > 0) {
  res.status(200).json(proj);
  //   } else {
  //    res.status(404).json({ message: 'There is no any record with this id' });
  //   }
 } catch (error) {
  res.status(500).json(error);
 }
});
api.post('/', async (req, res) => {
 try {
  const proj = await projectDb.add(req.body);
  res.status(201).json(proj);
 } catch (error) {
  res.status(500).json(error);
 }
});

module.exports = api;
