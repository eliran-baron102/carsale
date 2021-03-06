const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const Cars = require('./models/carsModel');
const Color = require('./models/colorModel');
const Order = require('./models/ordersModel');

// const Users = require('./models/usersModel');
// const Products = require('./models/productsModel');

const Sequelize = require('sequelize');
const sequelize = require('./utils/databse');

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const ColorRoute = require('./routes/colorRoute');
app.use('/color', ColorRoute);

const OrdersRoute = require('./routes/orderRoute');
app.use('/order', OrdersRoute);
const CarsRoute = require('./routes/carsRoute');
app.use('/car', CarsRoute);

app.use((req, res) => {
	res.send('Page NotFound22');
});

sequelize
	.sync()
	.then((result) => {
		app.listen(5000);
	})
	.catch((err) => {
		// logger.log("error", "ERRR " + JSON.stringify(err))
	});
