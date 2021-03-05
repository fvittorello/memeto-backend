const express = require('express');
const router = express.Router();
const mongo = require('../mongo');
const userSchema = require('../models/User');

router.get('/', (req, res) => {
	mongo().then(async () => {
		try {
			const result = await userSchema.find({});
			res.status(200).json(result);
		} catch (err) {
			console.log(err);
		}
	});
});

router.get('/:username', (req, res) => {
	const { username } = req.params;

	mongo().then(async () => {
		try {
			const result = await userSchema.find({ username });
			res.status(200).json(result);
		} catch (err) {
			console.log(err);
		}
	});
});

router.post('/', (req, res) => {
	const { username, email, password } = req.body;

	const user = new userSchema({
		username,
		email,
		password,
	});

	user
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json({ message: error });
		});
});

module.exports = router;
