const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

router.get('/getAllCars', carsController.getAllCars);
router.get('/insertCar', carsController.insertCar);

module.exports = router;
