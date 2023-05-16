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
				Sign in to your account
			</h2>
		</div>
		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900"
						>Email address</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required="false"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							v-model="email"
						/>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-900"
							>Password</label
						>
						<div class="text-sm">
							<router-link
								to="#"
								class="font-semibold text-indigo-600 hover:text-indigo-500"
								>Forgot password?</router-link
							>
						</div>
					</div>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required="false"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							v-model="password"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						@click.prevent="handleSignIn"
					>
						Sign in
					</button>
				</div>
			</form>

			<p class="mt-10 text-center text-sm text-gray-500">
				Not a member?
				<router-link
					:to="{ name: 'register' }"
					class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					>Make an account</router-link
				>
			</p>
			<!-- Add the Google login button -->
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import { GoogleLogin } from "vue3-google-login"
const email = ref("")
const password = ref("")

// Google sign-in configuration
// const googleClientId = "YOUR_GOOGLE_CLIENT_ID"
// const googleRedirectUri = "YOUR_GOOGLE_REDIRECT_URI"
// const googleScope = "email"
// const googleAccessType = "offline"
// const googleCookiePolicy = "single_host_origin"

function display() {
	console.log(email.value, password.value)
}

// function handleSignIn() {
// 	// Your sign-in logic goes here
// }

// // Handle successful Google sign-in
// function handleGoogleSuccess(response) {
// 	const { profileObj } = response
// 	// Handle the response from Google sign-in
// 	console.log("Google Sign-In Success:", profileObj)
// }

// // Handle error during Google sign-in
// function handleGoogleError(error) {
// 	// Handle the error from Google sign-in
// 	console.log("Google Sign-In Error:", error)
// }
</script>
