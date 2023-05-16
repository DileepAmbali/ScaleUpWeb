<template>
	<div class="max-w-lg m-auto">
		<div
			class="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8"
			:class="userAlreadyTaken ? 'mb-4' : 'pb-12'"
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
		<div v-if="userAlreadyTaken" class="h-8 text-center text-red-600">
			Email or Username already taken!
		</div>
		<form class="mx-4" method="post" @submit="handleSubmit">
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="text"
					name="floating_username"
					id="floating_username"
					v-model="username"
					@input="resetError"
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
					@input="resetError"
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
					:class="{ 'bg-red-300': isSamePassword === false }"
					placeholder=" "
					required
				/>
				<label
					for="floating_password"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Password</label
				>
			</div>
			<div
				class="relative z-0 w-full group"
				:class="[isSamePassword ? 'mb-6' : '']"
			>
				<input
					type="password"
					name="floating_repeat_password"
					id="floating_repeat_password"
					v-model="repeatPassword"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					@change="checkPassword"
					required
				/>
				<label
					for="floating_repeat_password"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Confirm password</label
				>
				<div v-if="!isSamePassword" class="h-6 text-xs text-red-600">
					Passwords don't match
				</div>
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
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
import axios from "axios"
import { ref, computed } from "vue"

const username = ref("")
const email = ref("")
const password = ref("")
const repeatPassword = ref("")
const firstName = ref("")
const lastName = ref("")
const phoneNumber = ref("")
const companyName = ref("")
const isSamePassword = ref(true)
const userAlreadyTaken = ref(false)

const resetError = () => {
	userAlreadyTaken.value = false
}

const checkPassword = () => {
	if (password.value !== repeatPassword.value) {
		isSamePassword.value = false
	} else {
		isSamePassword.value = true
	}
}

const handleSubmit = async (event) => {
	event.preventDefault() // Prevent default form submission

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
			if (error.response.status === 500) {
				userAlreadyTaken.value = true
			}
			// console.log(error)
		}
	}
}
</script>

<style lang="scss" scoped></style>
