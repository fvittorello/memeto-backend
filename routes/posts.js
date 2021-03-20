const express = require('express');
const router = express.Router();
const mongo = require('../mongo');
const postSchema = require('../models/Post');

router.get('/', (req, res) => {
	mongo().then(async () => {
		try {
			const result = await postSchema.find({});
			res.status(200).json(result);
		} catch (err) {
			console.log(err);
		}
	});
});

router.post('/', (req, res) => {
	const { user, title, description, image } = req.body;
	const post = new postSchema({
		user,
		title,
		description,
		image,
	});

	post
		.save()
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			res.json({ message: error });
		});
});

module.exports = router;
