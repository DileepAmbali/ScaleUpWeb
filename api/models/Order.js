const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		products: [
			{
				productId: { type: String },
				quantity: { type: Number, default: 1 }
			}
		],
		amount: { type: Number, required: true },
		address: { type: Object, required: true }, //Type Object because we get the address from Stripe
		status: { type: String, default: "pending" }
	},
	{ timestamps: true },
	{ database: "orders" }
)

module.exports = mongoose.model("Order", orderSchema)
