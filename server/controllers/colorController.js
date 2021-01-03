const con = require('../utils/databse');
const Color = require('../models/colorModel');

exports.getAllColors = async (req, res, next) => {
	await Color.findAll()
		.then((colors) => {
			res.send(colors);
		})
		.catch((err) => {
			res.send('error load users');
		});
};

exports.insertColor = async (req, res, next) => {
	let color = req.query.color;
	let price = req.query.price;
	console.log(color, price);

	let ob = {
		color: color,
		price: price
	};
	console.log(ob);
	await Color.create(ob)
		.then((color) => {
			res.send(color);
		})
		.catch((err) => {
			res.send('error load users');
		});
};
exports.getColorbyId = async (req, res, next) => {
	let color = req.query.color;

	await Color.findOne({ where: { color: color } })
		.then((color) => {
			res.send(color);
		})
		.catch((err) => {
			res.send('error load users');
		});
};
