<template>
	<div class="w-full flex flex-col justify-center p-4 m-auto xs:w-96">
		<div class="flex justify-center items-center mb-4">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="h-8 mr-3"
				alt="Flowbite Logo"
			/>
			<div class="dark:text-white">ScaleUpWeb</div>
		</div>
		<div
			class="text-center dark:text-white text-2xl border-b-2 pb-2 dark:border-slate-600 my-8 mx-auto"
		>
			Login
		</div>
		<form @submit.prevent="handleSubmit">
			<div class="mb-6">
				<label
					for="email"
					class="block mb-2 text-sm font-medium"
					:class="[
						emailError
							? 'text-red-700 dark:text-red-500'
							: 'text-gray-900 dark:text-white'
					]"
					>Your email</label
				>
				<input
					type="email"
					id="email"
					class="shadow-lg border text-sm rounded-lg block w-full p-2.5"
					:class="[
						emailError
							? 'incorrect-credentials'
							: 'correct-credentials'
					]"
					placeholder="name@email.com"
					v-model="email"
					required
				/>
				<p
					v-if="emailError"
					class="mt-2 text-sm text-red-600 dark:text-red-500"
				>
					<span class="font-medium">Yikes!</span> Email does not
					exist!
				</p>
			</div>
			<div class="mb-6">
				<label
					for="password"
					class="block mb-2 text-sm font-medium"
					:class="[
						passwordError
							? 'text-red-700 dark:text-red-500'
							: 'text-gray-900 dark:text-white'
					]"
					>Your password</label
				>
				<input
					type="password"
					id="password"
					placeholder="********"
					class="shadow-lg border text-sm rounded-lg block w-full p-2.5"
					:class="[
						passwordError
							? 'incorrect-credentials'
							: 'correct-credentials'
					]"
					v-model="password"
					required
				/>
				<p
					v-if="passwordError || LoginError"
					class="mt-2 text-sm text-red-600 dark:text-red-500"
				>
					<span class="font-medium">Goodn't!</span> Password or Email
					is wrong!
				</p>
			</div>
			<!-- <div v-if="LoginError">
				<p class="text-sm text-red-600 dark:text-red-500">
					<span class="font-medium">Goodn't!</span> Username or
					Password is wrong!
				</p>
			</div> -->
			<div class="dark:text-white text-sm mb-6">
				Not a user?
				<a href="/register" class="underline">Register Here</a>
			</div>

			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

const router = useRouter()

const emailError = ref(false)
const passwordError = ref(false)
const LoginError = ref(false)

const email = ref("")
const password = ref("")

const handleSubmit = async () => {
	// Reset the error states
	emailError.value = false
	passwordError.value = false

	try {
		const response = await axios.post(
			"http://localhost:1337/api/auth/local",
			{
				identifier: email.value,
				password: password.value
			}
		)

		// Handle the response as needed
		const { jwt } = response.data

		const userresponse = await axios.get(
			"http://localhost:1337/api/users/me?populate=*",
			{
				headers: {
					Authorization: `Bearer ${jwt}`
				}
			}
		)

		const user = userresponse.data

		// Save the user details and token to localStorage
		localStorage.setItem("token", jwt)
		localStorage.setItem("user", JSON.stringify(user) || "{}")
		localStorage.setItem("isLoggedIn", true)

		// Navigate to the home page
		window.location.href = "/"
	} catch (error) {
		// Handle the error and set the corresponding error states
		if (error) {
			LoginError.value = true
		}
	}
}
</script>

<style lang="scss" scoped></style>
