<template>
	<div class="w-full flex flex-col justify-center p-4 m-auto md:w-max">
		<div
			class="text-center dark:text-white text-2xl border-b-2 pb-2 dark:border-slate-600 my-8 mx-auto"
		>
			Register
		</div>

		<form @submit.prevent="handleSubmit">
			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label
						for="first_name"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>First name</label
					>
					<input
						type="text"
						id="first_name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="John"
						required
					/>
				</div>
				<div>
					<label
						for="last_name"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Last name</label
					>
					<input
						type="text"
						id="last_name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Doe"
						required
					/>
				</div>
				<div>
					<label
						for="company"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Company Name</label
					>
					<input
						type="text"
						id="company"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Flowbite"
						required
					/>
				</div>
				<div>
					<label
						for="phone"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Phone number</label
					>
					<input
						type="tel"
						id="phone"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="123-45-678"
						pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
						required
					/>
				</div>
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
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="john.doe@company.com"
					required
				/>
			</div>
			<div class="mb-6">
				<label
					for="password"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Password</label
				>
				<input
					type="password"
					id="password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					required
				/>
			</div>
			<div class="mb-6">
				<label
					for="confirm_password"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Confirm password</label
				>
				<input
					type="password"
					id="confirm_password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					required
				/>
			</div>
			<label
				for="zone"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Select a zone</label
			>
			<select
				id="zone"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
			>
				<option selected>Choose a zone</option>
				<option value="Z1">Zone1</option>
				<option value="Z2">Zone2</option>
				<option value="Z3">Zone3</option>
				<option value="Z4">Zone4</option>
			</select>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue"

const emailTakenError = false
const passwordMismatchError = false

const isMerchant = true
const isCustomer = false

const email = ref("")
const password = ref("")
const repeatedPassword = ref("")

const handleSubmit = () => {
	console.log("Submitted")
	console.log({
		email: email.value,
		password: password.value,
		repeatedPassword: repeatedPassword.value
	})
}
</script>

<style lang="scss" scoped></style>
