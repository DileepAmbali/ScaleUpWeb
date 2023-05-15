<template>
	<div
		class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
	>
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img
				class="mx-auto h-10 w-auto"
				src="https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=1504x1128"
				alt="Your Company"
			/>
			<h2
				class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
			>
				Create Your Account
			</h2>
		</div>
	</div>
	<form class="mx-4" method="post" @submit="handleSubmit">
		<div class="relative z-0 w-full mb-6 group">
			<input
				type="text"
				name="floating_username"
				id="floating_username"
				v-model="username"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="floating_username"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Username</label
			>
		</div>
		<div class="relative z-0 w-full mb-6 group">
			<input
				type="email"
				name="floating_email"
				id="floating_email"
				v-model="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="floating_email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Email address</label
			>
		</div>
		<div class="relative z-0 w-full mb-6 group">
			<input
				type="password"
				name="floating_password"
				id="floating_password"
				v-model="password"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				:class="{ 'border-red-500': isSamePassword === false }"
				placeholder=" "
				required
			/>
			<label
				for="floating_password"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Password</label
			>
		</div>
		<div class="relative z-0 w-full mb-6 group">
			<input
				type="password"
				name="floating_repeat_password"
				id="floating_repeat_password"
				v-model="repeatPassword"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				:class="{ 'border-red-500': isSamePassword === false }"
				placeholder=" "
				required
			/>
			<label
				for="floating_repeat_password"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Confirm password</label
			>
		</div>
		<div class="grid md:grid-cols-2 md:gap-6">
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="text"
					name="floating_first_name"
					id="floating_first_name"
					v-model="firstName"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_first_name"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>First name</label
				>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="text"
					name="floating_last_name"
					id="floating_last_name"
					v-model="lastName"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_last_name"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Last name</label
				>
			</div>
		</div>
		<div class="grid md:grid-cols-2 md:gap-6">
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="tel"
					pattern="[0-9]{10}"
					name="floating_phone"
					id="floating_phone"
					v-model="phoneNumber"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<!--*I changed that: pattern="[0-9]{10}" -->
				<label
					for="floating_phone"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Phone number (123-456-7890)</label
				>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="text"
					name="floating_company"
					id="floating_company"
					v-model="companyName"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_company"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Company (Ex. Google)</label
				>
			</div>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Submit
		</button>
	</form>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"
const isSamePassword = ref("true")

const username = ref("")
const email = ref("")
const password = ref("")
const repeatPassword = ref("")
const firstName = ref("")
const lastName = ref("")
const phoneNumber = ref("")
const companyName = ref("")

const handleSubmit = async (event) => {
	event.preventDefault() // Prevent default form submission

	if (password.value !== repeatPassword.value) {
		isSamePassword.value = false
	} else {
		isSamePassword.value = true
	}

	if (isSamePassword.value) {
		const formData = JSON.stringify({
			username: username.value,
			email: email.value,
			password: password.value,

			firstName: firstName.value,
			lastName: lastName.value,
			phoneNumber: phoneNumber.value,
			companyName: companyName.value
		})

		console.log(formData)

		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/register",
				formData,
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			console.log(response)
		} catch (error) {
			if (error.response) {
				console.log(error.response.data)
				console.log(error.response.status)
				console.log(error.response.headers)
			}
			// console.log(error)
		}
	}
}
</script>

<style lang="scss" scoped></style>
