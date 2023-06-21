<template>
	<AllProductList v-if="isLoaded" :products="products" />
	<Skeleton v-else />
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

import AllProductList from "../../components/AllProductList.vue"
import Skeleton from "../../components/Skeleton.vue"

import ProductService from "../../services/ProductServices"
const productService = new ProductService()

const products = ref([])
const isLoaded = ref(false)

onMounted(async () => {
	try {
		products.value = await productService.getAllProducts()
	} catch (error) {
		console.log(error)
	} finally {
		if (products.value.length > 0) {
			isLoaded.value = true
		}
	}
})
</script>
