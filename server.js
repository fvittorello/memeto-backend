const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//  Middlewares
app.use(express.json());

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
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log('db connected');
});

//  Server Listen

app.listen(3000, () => {
	console.log('Server listening');
});
