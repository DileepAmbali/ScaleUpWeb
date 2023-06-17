<template>
	<div
		id="dropdownAvatar"
		class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
	>
		<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
			<div class="font-bold">{{ userName }}</div>
			<div class="truncate">{{ userEmail }}</div>
		</div>
		<ul
			v-if="isLoggedIn"
			class="py-2 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="dropdownUserAvatarButton"
		>
			<li>
				<RouterLink
					:to="{
						name: 'profile'
					}"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Profile</RouterLink
				>
			</li>

			<li>
				<a
					href="#"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Purchases</a
				>
			</li>
		</ul>
		<div v-if="isLoggedIn" class="py-2" :key="isLoggedIn">
			<div
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:cursor-pointer"
				@click="logout"
			>
				Sign out
			</div>
		</div>
		<div v-else class="py-2" :key="!isLoggedIn">
			<a
				href="/login"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
				>Log In</a
			>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue"
import { RouterLink } from "vue-router"

// "`/user/${$store.state.user.id}`"

const userName = computed(() => {
	return localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")).username
		: "Hello User!"
})

const userEmail = computed(() => {
	return localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")).email
		: "Good day!"
})

const isLoggedIn = computed(() => {
	return localStorage.getItem("isLoggedIn")
		? JSON.parse(localStorage.getItem("isLoggedIn"))
		: false
})

const id = computed(() => {
	return localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")).id
		: null
})

const logout = () => {
	localStorage.removeItem("user")
	localStorage.removeItem("token")
	localStorage.removeItem("userDP")
	localStorage.setItem("isLoggedIn", false)
	window.location.href = "/"
}
</script>

<style lang="scss" scoped></style>
