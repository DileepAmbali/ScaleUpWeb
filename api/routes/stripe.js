const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

router.post("/payment", async (req, res) => {
	// `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token

	const charge = await stripe.charges.create(
		{
			amount: req.body.amount,
			currency: "inr",
			source: req.body.tokenId,
			description: "My First Test Charge (created for API docs)"
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				res.status(500).json(stripeErr)
			} else {
				res.status(200).json(stripeRes)
			}
		}
	)
})
module.exports = router
