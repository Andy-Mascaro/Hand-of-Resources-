const { Router } = require('express');
const { Store } = require('../models/Store');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const remove = await Store.delete(req.params.id);
      res.json(remove);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const update = await Store.updateById(req.params.id, req.body);
      res.json(update);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newStore = await Store.insert(req.body);
      res.json(newStore);
    } catch (e) {
      next(e);
    }
  })

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
