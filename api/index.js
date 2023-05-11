const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)

app.listen(process.env.PORT || 5000, () => {
	console.log("Server has started on port 5000")
})
