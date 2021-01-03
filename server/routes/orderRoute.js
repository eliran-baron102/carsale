const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.post('/insertOrder', OrderController.insertOrder);
router.get('/getAllOrders', OrderController.getAllOrders);
router.get('/getAllOrdersByCarId', OrderController.getAllOrdersByCarId);

module.exports = router;
