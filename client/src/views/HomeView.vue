<template>
  <!-- <Navbar /> -->

  <div class="flex flex-col justify-center items-center">
    <div class="w-full md:w-5/6 mt-6 md:mt-10 pb-2 dark:border-slate-700">
      <p class="text-2xl font-sans dark:text-gray-100 px-2">
        Trending Products
      </p>
      <AllProductList :products="products" />
      <!-- Load More button -->
      <div class="col-span-4 w-11/12 mx-auto pt-4 md:pt-2">
        <a href="/products">
          <button
            type="button"
            class="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white dark:text-gray-900 bg-gray-700 dark:bg-gray-50 hover:bg-gray-700 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-50"
          >
            Load more
          </button>
        </a>
      </div>
    </div>
    <div
      class="w-full md:w-5/6 mt-6 md:mt-10 border-b-2 pb-2 dark:border-slate-700"
    >
      <p class="text-2xl font-sans dark:text-gray-100">Trending Shops</p>
      <AllProductList :products="products" />
      <!-- Load More button -->
      <div class="col-span-4 w-11/12 mx-auto pt-4 md:pt-2">
        <a href="/products">
          <button
            type="button"
            class="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white dark:text-gray-900 bg-gray-700 dark:bg-gray-50 hover:bg-gray-700 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-50"
          >
            Load more
          </button>
        </a>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Card from "../components/Card.vue";
import ProductList from "../components/ProductList.vue";
import AllProductList from "../components/AllProductList.vue";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import ProductService from "../services/ProductServices.js";
const productService = new ProductService();

const products = ref([]);
onMounted(async () => {
  try {
    products.value = await productService.getNProducts(4);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("products:");
    console.log(products.value);
  }
});
</script>

<style scoped></style>
