const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token
	if (!authHeader) {
		return res.status(401).json("You are not authenticated")
	}
	const token = authHeader.split(" ")[1]
	try {
		jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
			if (err) throw err
			req.user = user
			next()
		})
	} catch (err) {
		return res.status(500).json(err)
	}
}

const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next()
		} else {
			res.status(403).json(
				"You do not have permission to perform this action"
			)
		}
	})
}

const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next()
		} else {
			res.status(403).json(
				"You do not have permission to perform this action"
			)
		}
	})
}

module.exports = {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin
}
