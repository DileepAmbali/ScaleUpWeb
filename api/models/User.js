const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, default: "" },
		phoneNumber: { type: String, required: true },
		companyName: { type: String, required: true },
		isAdmin: { type: Boolean, default: false }

		// profilePicture: {type: String, default: ""},
	},
	{ timestamps: true },
	{ database: "users" }
)

module.exports = mongoose.model("User", userSchema)
