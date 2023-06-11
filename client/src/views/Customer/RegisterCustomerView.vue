<template>
	<div class="w-full flex flex-col justify-center p-4 m-auto xs:w-96">
		<div
			class="text-center dark:text-white text-2xl border-b-2 pb-2 dark:border-slate-600 my-8 mx-auto"
		>
			Register
		</div>
		<form @submit.prevent="handleSubmit">
			<div class="mb-6">
				<label
					for="email"
					class="block mb-2 text-sm font-medium"
					:class="[
						emailTakenError
							? 'text-red-700 dark:text-red-500'
							: 'text-gray-900 dark:text-white'
					]"
					>Your Email</label
				>
				<input
					type="email"
					id="email"
					class="shadow-lg border text-sm rounded-lg block w-full p-2.5"
					:class="[
						emailTakenError
							? 'incorrect-credentials'
							: 'correct-credentials'
					]"
					placeholder="name@email.com"
					v-model="email"
					required
				/>
				<p
					v-if="emailTakenError"
					class="mt-2 text-sm text-red-600 dark:text-red-500"
				>
					<span class="font-medium">Oops!</span> Email already taken!
				</p>
			</div>

			<div class="mb-6">
				<label
					for="password"
					class="block mb-2 text-sm font-medium"
					:class="[
						passwordMismatchError
							? 'text-red-700 dark:text-red-500'
							: 'text-gray-900 dark:text-white'
					]"
					>Your password</label
				>
				<input
					type="password"
					id="password"
					class="shadow-lg border text-sm rounded-lg block w-full p-2.5"
					:class="[
						passwordMismatchError
							? 'incorrect-credentials'
							: 'correct-credentials'
					]"
					placeholder="Password"
					v-model="password"
					required
				/>
			</div>
			<div class="mb-6">
				<label
					for="password"
					class="block mb-2 text-sm font-medium"
					:class="[
						passwordMismatchError
							? 'text-red-700 dark:text-red-500'
							: 'text-gray-900 dark:text-white'
					]"
					>Re-Enter password</label
				>
				<input
					type="password"
					id="repassword"
					class="shadow-lg border text-sm rounded-lg block w-full p-2.5"
					:class="[
						passwordMismatchError
							? 'incorrect-credentials'
							: 'correct-credentials'
					]"
					placeholder="Password"
					v-model="repeatedPassword"
					required
				/>
				<p
					v-if="passwordMismatchError"
					class="mt-2 text-sm text-red-600 dark:text-red-500"
				>
					<span class="font-medium">Cringe!</span> Passwords don't
					match!
				</p>
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
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
			<!-- Need to add disabled button feature -->
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue"

const emailTakenError = false
const passwordMismatchError = false

const email = ref("")
const password = ref("")
const repeatedPassword = ref("")

const handleSubmit = () => {
	console.log("Submitted")
	console.log({
		id: crypto.randomUUID(),
		email: email.value,
		password: password.value,
		repeatedPassword: repeatedPassword.value
	})
}
</script>

<style lang="scss" scoped></style>
