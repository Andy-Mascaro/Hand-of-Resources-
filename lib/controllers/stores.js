const { Router } = require('express');
const { Store } = require('../models/Store');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const storeList = await Store.getAll();
    res.json(storeList);
  } catch (e) {
    next(e);
  }
});
