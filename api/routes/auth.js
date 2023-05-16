const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//Register
router.post("/register", async (req, res) => {
	const {
		username,
		email,
		password,
		firstName,
		lastName,
		phoneNumber,
		companyName
	} = req.body
	console.log(req.body)

	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			firstName,
			lastName,
			phoneNumber,
			companyName
		})
		await newUser.save()
		res.status(201).json(newUser)
	} catch (error) {
		if (error.code === 11000) {
			return res.status(500).json("Username or email already exists")
		}
		if (error.name === "ValidationError") {
			return res.status(500).json(error.message)
		}
		if (error.name === "MongoError") {
			return res.status(500).json(error.message)
		}
		res.status(500).json(error)
	}
})

//Login

router.post("/login", async (req, res) => {
	console.log(req.body)
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
