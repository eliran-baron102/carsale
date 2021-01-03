const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Color = sequelize.define('color', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	color: {
		type: Sequelize.STRING,
		allowNull: true
	},
	price: {
		type: Sequelize.INTEGER(11),
		allowNull: true
	}
});

module.exports = Color;
