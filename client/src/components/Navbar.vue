<template>
	<nav class="bg-white border-gray-200 dark:bg-gray-900">
		<div
			class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
		>
			<router-link
				v-if="$route.path !== '/login' && $route.path !== '/register'"
				to="/"
				class="flex items-center"
			>
				<img
					src="https://flowbite.com/docs/images/logo.svg"
					class="h-8 mr-3"
					alt="Flowbite Logo"
				/>
				<span
					class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Flowbite</span
				>
			</router-link>
			<router-link
				v-else
				to="/"
				class="flex items-center justify-center w-full"
			>
				<div class="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						class="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span
						class="text-2xl font-semibold whitespace-nowrap dark:text-white"
						>Flowbite</span
					>
				</div>
			</router-link>
			<div
				class="flex items-center"
				v-if="$route.path !== '/login' && $route.path !== '/register'"
			>
				<router-link
					:to="{ name: 'login' }"
					class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 text-sm font-medium mr-4"
					>Log In</router-link
				>
				<router-link
					:to="{ name: 'register' }"
					class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md"
					>Sign Up</router-link
				>
			</div>
		</div>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
