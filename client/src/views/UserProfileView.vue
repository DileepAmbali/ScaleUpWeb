<template>
	<div class="px-4 lg:mx-auto lg:max-w-screen-lg pb-12 md:pb-20">
		<div class="mt-16 flex justify-between">
			<div class="flex-1 flex items-center">
				<div
					class="flex gap-2 p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
					@click="$router.back()"
				>
					<ArrowLeftIcon
						class="h-6 dark:text-white flex self-center"
					/>
					<div class="text-lg dark:text-white">Back</div>
				</div>
			</div>
		</div>
		<div class="text-3xl md:text-4xl font-extrabold dark:text-white">
			Your Profile
		</div>
		<div v-if="isMerchant">
			<div class="mt-4 py-4 text-xl font-semibold dark:text-white">
				Your Products
			</div>
			<AllProductList />
		</div>

		<!-- Form to add products if is a merchant else dont render -->
		<form
			action="submit"
			@submit.prevent="handleProductAddition"
			v-if="isMerchant"
		>
			<div class="mt-4 py-4 text-xl font-semibold dark:text-white">
				Add Products
			</div>
			<div
				class="grid gap-6 mb-6 md:grid-cols-2 border-b-2 dark:border-gray-700"
			>
				<div>
					<label
						for="productName"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Name</label
					>
					<input
						type="text"
						id="productName"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						v-model="product.data.name"
					/>
				</div>

				<div class="mb-6">
					<label
						for="price"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Price</label
					>
					<input
						type="number"
						id="price"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						v-model="product.data.price"
					/>
				</div>

				<div class="mb-6">
					<label
						for="description"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Description</label
					>
					<textarea
						id="description"
						rows="4"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						v-model="product.data.description"
						placeholder="Write your des here..."
					></textarea>
				</div>
				<div class="mb-6">
					<label
						for="details"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Details</label
					>
					<textarea
						id="details"
						rows="4"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						v-model="product.data.details"
						placeholder="Write your des here..."
					></textarea>
				</div>
				<div class="col-span-2 mb-6">
					<label
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						for="multiple_files"
						>Upload multiple files</label
					>
					<input
						class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="multiple_files"
						ref="fileInput"
						type="file"
						accept="image/png, image/jpeg"
						multiple
					/>
					<p
						class="mt-1 text-sm text-gray-500 dark:text-gray-300"
						id="file_input_help"
					>
						Choose upto 4 images of type PNG or JPG (MAX.
						800x400px).
					</p>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Add Product
			</button>
		</form>

		<!-- User Details form -->
		<form @submit.prevent="handleSaveDetails">
			<div class="mt-12 py-4 text-xl font-semibold dark:text-white">
				User Details
			</div>
			<span class="font-normal text-sm">
				<button
					type="button"
					class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mb-8 text-xs flex justify-center items-center gap-2"
				>
					<PencilSquareIcon class="h-4" />

					<span class="">Edit User Details</span>
				</button>
			</span>
			<div
				class="grid gap-6 mb-6 md:grid-cols-2 border-b-2 dark:border-gray-700"
			>
				<div>
					<label
						for="name"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Name</label
					>
					<input
						type="text"
						id="name"
						:class="
							isEditing
								? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
						"
						v-model="user.username"
						:disabled="!isEditing"
					/>
				</div>
				<div v-if="isMerchant">
					<label
						for="company"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Company Name</label
					>
					<input
						type="text"
						id="company"
						:class="
							isEditing
								? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
						"
						v-model="user.companyName"
						:disabled="!isEditing"
					/>
				</div>

				<div class="mb-6">
					<label
						for="email"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Email address</label
					>
					<input
						type="email"
						id="email"
						:class="
							isEditing
								? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
						"
						v-model="user.email"
						:disabled="!isEditing"
					/>
				</div>
				<div class="mb-6">
					<label
						for="zone"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Zone</label
					>
					<input
						type="text"
						id="zone"
						:class="
							isEditing
								? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
						"
						v-model="user.zone.name"
						:disabled="!isEditing"
					/>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Save User Details
			</button>
		</form>
		<form @submit.prevent="handlePasswordChange">
			<div class="text-xl dark:text-white my-8 md:pt-8">
				Change Password?
			</div>

			<div class="mb-6">
				<label
					for="currentPassword"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Current Password</label
				>
				<input
					type="password"
					id="currentPassword"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					v-model="password.current"
				/>
			</div>
			<div class="mb-6">
				<label
					for="newPassword"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>New Password</label
				>
				<input
					type="password"
					id="newPassword"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					v-model="password.new"
				/>
			</div>
			<div class="mb-6">
				<label
					for="confirm_password"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Confirm New Password</label
				>
				<input
					type="password"
					id="confirm_password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					v-model="password.confirm"
				/>
			</div>

			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Change Password
			</button>
		</form>
	</div>
</template>

<script setup>
import { ArrowLeftIcon, PencilSquareIcon } from "@heroicons/vue/24/outline"
import { computed, ref, watchEffect } from "vue"
import axios from "axios"
import FormData from "form-data"
import AllProductList from "../components/AllProductList.vue"

const fileInput = ref(null)
const baseUrl = "https://37fa-223-190-197-197.ngrok-free.app"

//get user from local storage
const user = computed(() => {
	return JSON.parse(localStorage.getItem("user"))
}).value

const product = ref({
	data: {
		name: "",
		description: "",
		details: "",
		images: [
			{
				id: ""
			}
		],
		price: "",
		seller: computed(() => {
			return user
		}).value
	}
})

// const handleFileUpload = async (e) => {
// 	const files = e.target.files
// 	const data = new FormData()
// 	for (let i = 0; i < files.length; i++) {
// 		data.append("files", files[i])
// 	}

// 	let config = {
// 		method: "post",
// 		maxBodyLength: "Infinity",
// 		url: "http://localhost:1337/api/upload/",
// 		headers: {
// 			Authorization: `Bearer ${localStorage.getItem("token")}`,
// 			...data.headers
// 		},
// 		data: data
// 	}
// 	try {
// 		const response = await axios(config)
// 		for (let i = 0; i < response.data.length; i++) {
// 			product.value.data.images.push(response.data[i].id)
// 		}
// 		console.log("response.data")
// 		console.log(product.value.data.images)
// 		console.log(JSON.stringify(response.data))
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

const handleProductAddition = async () => {
	// Image Upload
	const data = new FormData()
	Array.from(fileInput.value.files).forEach((file) => {
		data.append("files", file)
	})

	let config = {
		method: "post",
		maxBodyLength: "Infinity",
		url: baseUrl + "/api/upload/",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
			...data.headers
		},
		data: data
	}

	try {
		const response = await axios(config)
		product.value.data.images = response.data.map((image) => {
			return { id: image.id }
		})
	} catch (error) {
		console.log(error)
	}

	// Product Upload
	console.log(JSON.stringify(product.value.data))
	config = {
		method: "post",
		url: baseUrl + "/api/products/",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		data: product.value
	}
	try {
		const response = await axios(config)

		console.log(JSON.stringify(response.data))
	} catch (error) {
		console.log(error)
	}
}

const isMerchant = computed(() => {
	return user.role.type === "merchant"
	// return false
})

const password = ref({
	current: "",
	new: "",
	confirm: ""
})

//when password form is filled out, check if new password matches confirm password
watchEffect(() => {
	if (password.value.new !== password.value.confirm) {
		console.log("passwords do not match")
	}
})

const handleUserDetailsSubmit = (e) => {
	e.preventDefault()
	console.log("user details submitted")
}

const handlePasswordChange = (e) => {
	e.preventDefault()
	console.log("password change submitted")
}
// handle password submit

const isEditing = false
</script>

<style lang="scss" scoped></style>
