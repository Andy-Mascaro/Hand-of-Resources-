const { Router } = require('express');
const { Season } = require('../models/Season');
const { put } = require('./planes');

module.exports = Router()
  .put('/:id', async (req, res, next) => {
    try {
      const update = await Season.updateById(req.params.id, req.body);
      res.json(update);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newSeason = await Season.insert(req.body);
      res.json(newSeason);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const seasonInfo = await Season.getById(id);
      res.json(seasonInfo);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const seasonList = await Season.getAll();
      res.json(seasonList);
    } catch (e) {
      next(e);
    }
  });
