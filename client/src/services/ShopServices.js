import axios from "axios"

export default class ShopServices {
	constructor() {
		this.URL = "http://localhost:1337/api/users"
		this.query = "?populate=*"
		this.shops = []
	}
	async getAllShops() {
		try {
			const response = await axios.get(this.URL + this.query)

			for (let user of response.data) {
				if (user.role.type === "merchant") {
					const data = {
						id: user.id || "",
						companyName: user.companyName || "",
						zone: user.zone.name || "",
						image: user.dp.url || ""
					}
					this.shops.push(data)
				}
			}
		} catch (err) {
			console.log(err)
		} finally {
			console.log(this.shops)
			return this.shops
		}
	}
}
