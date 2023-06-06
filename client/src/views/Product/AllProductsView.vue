<template>
  <AllProductList :products="products" />
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

import AllProductList from "../../components/AllProductList.vue";

import ProductService from "../../services/ProductServices";
const productService = new ProductService();

const products = ref([]);

onMounted(async () => {
  try {
    const response = await productService.getProducts();
    // console.log(response.data);
    products.value = response;
  } catch (error) {
    // console.log(error);
  }
});
</script>
