const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Order = sequelize.define('orders', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: true
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: true
	},
	mail: {
		type: Sequelize.STRING,
		allowNull: true
	},
	addres: {
		type: Sequelize.STRING,
		allowNull: true
	},
	color: {
		type: Sequelize.STRING,
		allowNull: true
	},
	cartype: {
		type: Sequelize.STRING,
		allowNull: true
	},
	price: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

module.exports = Order;
