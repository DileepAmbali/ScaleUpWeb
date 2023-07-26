<template>
	<div class="flex flex-col justify-center items-center">
		<div class="w-5/6 mt-6 md:mt-10 pb-2 dark:border-slate-700">
			<Skeleton v-if="isLoading" />

			<div v-else>
				<div class="text-3xl font-bold dark:text-white py-4">
					Shops in {{ shops[0].zone }}
				</div>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
					<div v-for="shop in shops" :key="shop">
						<a :href="/merchants/ + shop.id">
							<img
								class="h-auto max-w-full rounded-lg"
								:src="baseService.baseURL + shop.image"
								:alt="shop.companyName"
							/>
							<div
								class="text-xl font-bold dark:text-white p-2 text-center"
							>
								{{ shop.companyName }}
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Skeleton from "../components/Skeleton.vue"

import ShopService from "../services/ShopServices.js"
const shopService = new ShopService()

import BaseService from "../services/main.js"
const baseService = new BaseService()

const isLoading = ref(true)
const shops = ref([])
onMounted(async () => {
	try {
		const response = await shopService.getAllShops()
		shops.value = response
	} catch (error) {
		console.log(error)
	} finally {
		isLoading.value = false
	}
})
</script>

<style scoped></style>
