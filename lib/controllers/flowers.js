const { Router } = require('express');
const { Flower } = require('../models/Flower');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const flowerList = await Flower.getById(id);
      res.json(flowerList);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const flowerList = await Flower.getAll();
      res.json(flowerList);
    } catch (e) {
      next(e);
    }
  });
