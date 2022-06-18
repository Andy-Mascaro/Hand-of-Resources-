const { Router } = require('express');
const { Flower } = require('../models/Flower');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const newFlower = await Flower.insert(req.body);
      res.json(newFlower);
    } catch (e) {
      next(e);
    }
  })

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
