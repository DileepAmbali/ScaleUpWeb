<!-- !DEAD  -->

<template>
  <div>
    <h2 class="sr-only">Products</h2>

    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8"
    >
      <a
        v-for="product in products"
        :key="product.id"
        :href="product.href"
        class="group"
      >
        <div
          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700 dark:text-white">
          {{ product.name }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">
          {{ product.price }}
        </p>
      </a>
      <div v-if="moreExists">
        <button type="button" @click="loadMore" class="w-full">
          <div
            id="load-more"
            class="flex justify-center items-center aspect-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
          >
            <p class="">Load More</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Card from "./Card.vue";
import { computed } from "vue";

const moreExists = ref(false);
const loadedValue = ref(4);

onMounted(() => {
  if (products.length > loadedValue.value) {
    moreExists.value = true;
  }
});

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const products = computed(() => {
  return props.products;
});
</script>

<style scoped>
@media (min-width: 1280px) {
  #load-more {
    aspect-ratio: 7/8;
  }
}
</style>
