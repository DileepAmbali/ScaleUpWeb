import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/LoginView.vue")
		},
		{
			path: "/register",
			name: "register",
			component: () => import("../views/RegisterView.vue")
		}
		// {
		// 	path: "/products",
		// 	name: "products",
		// 	component: () => import("../views/ProductsView.vue")
		// },
		// {
		// 	path: "/product/:id",
		// 	name: "product",
		// 	component: () => import("../views/ProductView.vue")
		// },
		// {
		// 	path: "/cart",
		// 	name: "cart",
		// 	component: () => import("../views/CartView.vue")
		// },
		// {
		// 	path: "/success",
		// 	name: "success",
		// 	component: () => import("../views/SuccessView.vue")
		// },
		// {
		// 	path: "/admin",
		// 	name: "admin",
		// 	component: () => import("../views/AdminView.vue")
		// },
		// {
		// 	path: "/admin/products",
		// 	name: "admin-products",
		// 	component: () => import("../views/AdminProductsView.vue")
		// },
		// {
		// 	path: "/admin/product/:id",
		// 	name: "admin-product",
		// 	component: () => import("../views/AdminProductView.vue")
		// },
		// {
		// 	path: "/admin/users",
		// 	name: "admin-users",
		// 	component: () => import("../views/AdminUsersView.vue")
		// },
		// {
		// 	path: "/admin/user/:id",
		// 	name: "admin-user",
		// 	component: () => import("../views/AdminUserView.vue")
		// },
		// {
		// 	path: "/admin/orders",
		// 	name: "admin-orders",
		// 	component: () => import("../views/AdminOrdersView.vue")
		// },
		// {
		// 	path: "/admin/order/:id",
		// 	name: "admin-order",
		// 	component: () => import("../views/AdminOrderView.vue")
		// },
		// {
		// 	path: "/admin/create",
		// 	name: "admin-create",
		// 	component: () => import("../views/AdminCreateView.vue")
		// },
		// {
		// 	path: "/admin/create-product",
		// 	name: "admin-create-product",
		// 	component: () => import("../views/AdminCreateProductView.vue")
		// },
		// {
		// 	path: "/admin/create-user",
		// 	name: "admin-create-user",
		// 	component: () => import("../views/AdminCreateUserView.vue")
		// },
		// {
		// 	path: "/admin/create-order",
		// 	name: "admin-create-order",
		// 	component: () => import("../views/AdminCreateOrderView.vue")
		// },
		// {
		// 	path: "/admin/edit/:id",
		// 	name: "admin-edit",
		// 	component: () => import("../views/AdminEditView.vue")
		// },
		// {
		// 	path: "/admin/edit-product/:id",
		// 	name: "admin-edit-product",
		// 	component: () => import("../views/AdminEditProductView.vue")
		// },
		// {
		// 	path: "/admin/edit-user/:id",
		// 	name: "admin-edit-user",
		// 	component: () => import("../views/AdminEditUserView.vue")
		// }

		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (About.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import('../views/AboutView.vue')
		// }
	]
})

export default router
