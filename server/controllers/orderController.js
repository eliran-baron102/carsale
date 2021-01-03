const con = require('../utils/databse');
const Order = require('../models/ordersModel');

exports.getAllOrdersByCarId = async (req, res, next) => {
	let Id = req.query.id;
	await Order.findAll({ where: { gameId: Id } })
		.then((orders) => {
			res.send(orders);
		})
		.catch((err) => {
			res.send('error load users');
		});
};
exports.getAllOrders = async (req, res, next) => {
	await Order.findAll()
		.then((orders) => {
			res.send(orders);
		})
		.catch((err) => {
			res.send('error load users');
		});
};

exports.insertOrder = async (req, res, next) => {
	let obj = req.body;
	await Order.create(obj)
		.then((obj) => {
			console.log('in');
			res.send('1');
		})
		.catch((err) => {
			console.log('err');
			res.send('err');
		});
};
