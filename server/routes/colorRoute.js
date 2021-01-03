const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

router.get('/getAllColors', colorController.getAllColors);

router.get('/insertColor', colorController.insertColor);
module.exports = router;
