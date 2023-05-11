const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false }
		// profilePicture: {type: String, default: ""},
		// coverPicture: {type: String, default: ""},
		// desc: {type: String, max: 50},
		// city: {type: String, max: 50},
	},
	{ timestamps: true },
	{ database: "users" }
)

module.exports = mongoose.model("User", userSchema)
