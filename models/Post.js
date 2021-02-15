const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	user: { type: String, required: true },
	title: { type: String, required: true },
	// image: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Posts', PostSchema);
