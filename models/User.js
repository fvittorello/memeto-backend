const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: false },
	liked_posts: { type: Array, required: false },
	saved_posts: { type: Array, required: false },
	modified_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', UserSchema);
