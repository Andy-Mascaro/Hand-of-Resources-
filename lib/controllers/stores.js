const { Router } = require('express');
const { Store } = require('../models/Store');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const storeInfo = await Store.getById(id);
      res.json(storeInfo);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const storeList = await Store.getAll();
      res.json(storeList);
    } catch (e) {
      next(e);
    }
  });
