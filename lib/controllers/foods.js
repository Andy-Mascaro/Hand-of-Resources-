const { Router } = require('express');
const { Food } = require('../models/Food');

module.exports = Router()
  .post('POST /', async (req, res, next) => {
    try {
      const newFood = await Food.insert(req.body);
      res.json(newFood);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const foodInfo = await Food.getById(id);
      res.json(foodInfo);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const foodList = await Food.getAll();
      res.json(foodList);
    } catch (e) {
      next(e);
    }
  });
