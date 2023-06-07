import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import RegisterView from "../views/RegisterView.vue"
import LoginView from "../views/LoginView.vue"
import AllProductsView from "../views/Product/AllProductsView.vue"
import ProductView from "../views/Product/ProductView.vue"
import AllCustomersView from "../views/Customer/AllCustomersView.vue"
import ProfileView from "../views/Customer/ProfileView.vue"
import OrderView from "../views/Customer/OrderView.vue"
import CartView from "../views/CartView.vue"
import AllMerchantsView from "../views/Merchant/AllMerchantsView.vue"
import MerchantView from "../views/Merchant/MerchantView.vue"
import MerchantDashboardView from "../views/Merchant/MerchantDashboardView.vue"
import CreateProductsView from "../views/Merchant/CreateProductsView.vue"
import RegisterChoiceView from "../views/RegisterChoiceView.vue"
import RegisterCustomerView from "../views/Customer/RegisterCustomerView.vue"
import RegisterMerchantView from "../views/Merchant/RegisterMerchantView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/about",
			name: "about",
			component: AboutView
		},
		{
			path: "/register",
			children: [
				{
					path: "",
					name: "register",
					component: RegisterChoiceView
				},
				{
					path: "customer",
					name: "registerCustomer",
					component: RegisterCustomerView
				},
				{
					path: "merchant",
					name: "registerMerchant",
					component: RegisterMerchantView
				}
			]
		},
		{
			path: "/login",
			name: "login",
			component: LoginView
		},
		{
			path: "/products",
			children: [
				{
					path: "",
					name: "products",
					component: AllProductsView
				},
				{
					path: ":productId",
					name: "product",
					component: ProductView
				}
			]
		},
		{
			path: "/customers",
			children: [
				{
					path: "",
					name: "customers",
					component: AllCustomersView
				},
				{
					path: ":customerId",
					children: [
						{
							path: "profile",
							name: "customerProfile",
							component: ProfileView
						},
						{
							path: "cart",
							name: "cart",
							component: CartView
						},
						{
							path: "orders",
							name: "customerOrders",
							component: OrderView
						}
					]
				}
			]
		},
		{
			path: "/merchants",
			children: [
				{
					path: "",
					name: "merchants",
					component: AllMerchantsView
				},
				{
					path: ":sellerId",
					children: [
						{
							path: "",
							name: "merchant",
							component: MerchantView
						},
						{
							path: "dashboard",
							name: "merchantDashboard",
							component: MerchantDashboardView
						},
						{
							path: "createproducts",
							name: "createProducts",
							component: CreateProductsView
						}
					]
				}
			]
		}
	]
})

export default router
