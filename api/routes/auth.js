const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//Register
router.post("/register", async (req, res) => {
	const {
		floating_username,
		floating_email,
		floating_password,
		floating_repeat_password,
		floating_first_name,
		floating_last_name,
		floating_phone_number,
		floating_company
	} = req.body

	// console.log(req.body)

	// console.log(
	// 	"password: " + floating_password + "\n",
	// 	"repeat password: " + floating_repeat_password + "\n",
	// 	"email" + floating_email + "\n",
	// 	"username" + floating_username + "\n",
	// 	"first name" + floating_first_name + "\n",
	// 	"last name" + floating_last_name + "\n",
	// 	"phone number" + floating_phone_number + "\n",
	// 	"company" + floating_company + "\n"
	// )

	if (floating_password !== floating_repeat_password) {
		console.log("Passwords do not match")
		return res.status(400).json("Passwords do not match")
	}

	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(floating_password, salt)
		console.log("hashed password: " + hashedPassword + "\n")

		const newUser = new User({
			username: floating_username,
			firstName: floating_first_name,
			lastName: floating_last_name,
			email: floating_email,
			phoneNumber: floating_phone_number,
			companyName: floating_company,
			password: hashedPassword
		})
		console.log(newUsers)
		await newUser.save()
		res.status(201).json(newUser)
	} catch (err) {
		if (err.code === 11000) {
			return res.status(400).json("Username or email already exists")
		} else if (err.name === "ValidationError") {
			return res.status(400).json(err.message)
		} else if (err.name === "MongoError") {
			return res.status(400).json(err.message)
		} else {
			res.status(500).json(err)
		}
	}
})

//Login

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username })
		if (!user) {
			return res.status(404).json("User not found")
		}
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		)
		if (!validPassword) {
			return res.status(400).json("Wrong password")
		}
		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin
			},
			process.env.JWT_SECRET,
			{ expiresIn: "3d" }
		)
		const { password, ...others } = user._doc //pass is the password, others is everything else
		res.status(200).json({ ...others, accessToken })
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
