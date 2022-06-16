const { Router } = require('express');
const { Plane } = require('../models/Plane');

module.exports = Router().get('/', async (req, res) => {
  const planeList = await Plane.getAll();
  res.json(planeList);
});
