<template>
	<div class="w-full my-8 flex flex-col justify-center p-4 m-auto xs:w-96">
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
					v-if="passwordError"
					class="mt-2 text-sm text-red-600 dark:text-red-500"
				>
					<span class="font-medium">Goodn't!</span> Password is wrong!
				</p>
			</div>
			<div class="flex items-start mb-6">
				<label
					for="register"
					class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Not registered yet?
					<a
						href="/register"
						class="font-bold underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-500"
						>Register Here</a
					>
				</label>
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

const emailError = false
const passwordError = false

const email = ref("")
const password = ref("")

const handleSubmit = async () => {}
</script>

<style lang="scss" scoped></style>
