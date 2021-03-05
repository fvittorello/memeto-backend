const mongoose = require('mongoose');
require('dotenv/config');

module.exports = async () => {
	await mongoose.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return mongoose;
};
