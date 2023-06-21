import axios from "axios"
export default class ProductService {
	constructor() {
		this.URL = "http://localhost:1337/api/products"
		this.query = "?populate=seller.zone,images,sizes"
		this.products = []
		this.product = {}
	}

	setProduct(data) {
		this.product = data
	}

	converFormat(response) {
		if (Array.isArray(response.data.data))
			for (let product of response.data.data) {
				const data = {
					id: product.id || "",
					name: product.attributes.name || "",
					price: product.attributes.price || "",
					images: product.attributes.images.data || "",
					sizes: product.attributes.sizes || "",
					description: product.attributes.description || "",
					highlights: product.attributes.highlights || "",
					details: product.attributes.details || "",
					seller:
						{
							id: product.attributes.seller.data.id || "",
							companyName:
								product.attributes.seller.data.attributes
									.companyName || "",
							zone:
								{
									id:
										product.attributes.seller.data
											.attributes.zone.data.id || "",
									name:
										product.attributes.seller.data
											.attributes.zone.data.attributes
											.name || ""
								} || ""
						} || ""
				}
				this.products.push(data)
			}
		else {
			const product = response.data.data
			const data = {
				id: product.id || "",
				name: product.attributes.name || "",
				price: product.attributes.price || "",
				images: product.attributes.images.data || "",
				sizes: product.attributes.sizes || "",
				description: product.attributes.description || "",
				highlights: product.attributes.highlights || "",
				details: product.attributes.details || "",
				seller:
					{
						id: product.attributes.seller.data.id || "",
						companyName:
							product.attributes.seller.data.attributes
								.companyName || "",
						zone:
							{
								id:
									product.attributes.seller.data.attributes
										.zone.data.id || "",
								name:
									product.attributes.seller.data.attributes
										.zone.data.attributes.name || ""
							} || ""
					} || ""
			}
			this.setProduct(data)
		}
	}

	async getAllProducts() {
		try {
			const response = await axios.get(this.URL + this.query)

			this.converFormat(response)
		} catch (error) {
			console.log(error)
		} finally {
			return this.products
		}
	}

	async getProductById(id) {
		let product = {}
		try {
			const response = await axios.get(`${this.URL}/${id}${this.query}`)
			this.converFormat(response)
		} catch (e) {
			console.log(e)
		} finally {
			// console.log(product)
			return this.product
		}
	}

	async getNProducts(n) {}
}
