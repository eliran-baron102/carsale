const con = require('../utils/databse');
const Cars = require('../models/carsModel');

exports.getAllCars = async (req, res, next) => {
	// let id = req.query.id;

	await Cars.findAll()
		.then((cars) => {
			res.send(cars);
		})
		.catch((err) => {
			res.send('error load users');
		});
};
exports.insertCar = async (req, res, next) => {
	let name = req.query.name;
	let price = req.query.price;
	console.log(name, price);

	let ob = {
		name: name,
		price: price
	};
	console.log(ob);
	await Cars.create(ob)
		.then((car) => {
			res.send(car);
		})
		.catch((err) => {
			res.send('error load users');
		});
};
