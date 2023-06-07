<template>
	<div
		class="max-w-screen-sm p-4 mx-auto flex flex-col items-center gap-4 dark:text-white text-2xl pb-2 my-8"
	>
		<div>REGISTER</div>
		<div class="flex gap-8">
			<RouterLink :to="{ name: 'registerMerchant' }">
				<button
					type="button"
					class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Register as a Merchant
				</button>
			</RouterLink>
			<RouterLink :to="{ name: 'registerCustomer' }">
				<button
					type="button"
					class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Register as a Customer
				</button>
			</RouterLink>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
