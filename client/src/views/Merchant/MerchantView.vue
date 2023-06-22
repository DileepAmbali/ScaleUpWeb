<template>
	<div>
		<AllProductList v-if="isLoaded" :products="products" />
		<Skeleton v-else />
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute } from "vue-router"
const $route = useRoute()

import AllProductList from "../../components/AllProductList.vue"
import Skeleton from "../../components/Skeleton.vue"

import ProductService from "../../services/ProductServices"
const productService = new ProductService()

const products = ref([])
const isLoaded = ref(false)

const sellerId = computed(() => $route.params.sellerId).value

onMounted(async () => {
	try {
		products.value = await productService.getProductsBySellerId(sellerId)
	} catch (error) {
		console.log(error)
	} finally {
		if (products.value.length > 0) {
			isLoaded.value = true
		}
	}
})
</script>

<style lang="scss" scoped></style>
