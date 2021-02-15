const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
	res.status(200).json({ data: 'Testing posts get response' });
});

router.post('/', (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});

	post
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json({ message: error });
		});
});

module.exports = router;
