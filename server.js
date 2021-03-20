const express = require('express');
const mongo = require('./mongo');
const cors = require('cors');
require('dotenv/config');

const app = express();

//  Middlewares
app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '10mb' }));
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
app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
