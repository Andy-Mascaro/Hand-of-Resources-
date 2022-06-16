const { Router } = require('express');
const { Plane } = require('../models/Plane');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const planeInfo = await Plane.getById(id);
    res.json(planeInfo);
  })

  .get('/', async (req, res) => {
    const planeList = await Plane.getAll();
    res.json(planeList);
  });
