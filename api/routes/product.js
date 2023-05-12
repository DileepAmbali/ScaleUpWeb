const router = require("express").Router()
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin
} = require("./verifyToken")
const Product = require("../models/Product")
//Create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
	//!Only admin can create new product
	const newProduct = new Product(req.body)
	try {
		const savedProduct = await newProduct.save()
		res.status(201).json(savedProduct)
	} catch (err) {
		res.status(500).json(err)
	}
})

//Update
router.put("/:productid", verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.productid,
			{
				$set: req.body
			},
			{ new: true }
		)
		res.status(200).json(updatedProduct)
	} catch (err) {
		res.status(500).json(err)
	}
})

//Delete
router.delete("/:productid", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.productid)
		res.status(200).json("Product has been deleted")
	} catch (err) {
		res.status(500).json(err)
	}
})

//Get
router.get("/find/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.status(200).json(product)
	} catch (err) {
		res.status(500).json(err)
	}
})

//Get All
router.get("/", async (req, res) => {
	try {
		const queryNew = req.query.new
		const queryCatagory = req.query.catagory

		let products
		if (queryNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(5)
		} else if (queryCatagory) {
			products = await Product.find({
				categories: {
					$in: [queryCatagory]
				}
			})
		} else {
			products = await Product.find()
		}

		res.status(200).json(products)
	} catch (err) {
		res.status(500).json(err)
	}
})

// Todo Product Statistics (Most popular, Most viewed, etc)

// router.get("/statistics", async (req, res) => {
// 	const date = new Date()
// 	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

// 	try {
// 		const data = await Product.aggregate([
// 			{ $match: { createdAt: { $gte: lastYear } } },
// 			{ $project: { month: { $month: "$createdAt" } } },
// 			{ $group: { _id: "$month", total: { $sum: 1 } } }
// 		])
// 		res.status(200).json(data)
// 	} catch (err) {
// 		res.status(500).json(err)
// 	}
// })

module.exports = router
