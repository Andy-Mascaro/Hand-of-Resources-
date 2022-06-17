const { Router } = require('express');
const { Plane } = require('../models/Plane');

module.exports = Router()
  .put('/:id', async (req, res) => {
    const update = await Plane.updateById(req.params.id);
    res.json(update);
  })
  .post('/', async (req, res) => {
    const newPlane = await Plane.insert(req.body);
    res.json(newPlane);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const planeInfo = await Plane.getById(id);
    res.json(planeInfo);
  })

  .get('/', async (req, res) => {
    const planeList = await Plane.getAll();
    res.json(planeList);
  });
