const { Router } = require('express');
const { Season } = require('../models/Season');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const seasonList = await Season.getAll();
    res.json(seasonList);
  } catch (e) {
    next(e);
  }
});
