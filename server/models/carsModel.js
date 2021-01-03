const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Cars = sequelize.define('cars', {
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
	price: {
		type: Sequelize.STRING,
		allowNull: true
	}
});
module.exports = Cars;
