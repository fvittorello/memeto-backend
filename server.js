const express = require('express');
const mongo = require('./mongo');
require('dotenv/config');

const app = express();

//  Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

// Routes
app.get('/', (req, res) => {
	res.send('test');
});

//  Connect to db
const connectToMongoDB = async () => {
	await mongo().then(async (mongoose) => {
		try {
			console.log('Connected to mongoDB!');
		} catch (err) {
			console.log(err);
		}
	});
};

connectToMongoDB();

//  Server Listen
app.listen(3000, () => {
	console.log('Server listening');
});
