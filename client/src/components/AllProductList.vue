<template>
  <template v-if="isPhone">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li
        v-for="product in products"
        :key="product.id"
        class="p-2 px-4 odd:bg-slate-50 dark:odd:bg-[#19212c6d]"
      >
        <a :href="'/products/' + product.id" class="group">
          <div class="flex items-center space-x-4 h-28">
            <img
              class="rounded-sm shadow-lg object-cover w-20"
              :src="product.images[0].src"
              alt="product.images[0].alt "
            />
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                {{ product.name }}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                {{ product.description }}
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              {{ product.price }}
            </div>
          </div>
        </a>
      </li>
    </ul>
  </template>
  <template v-else>
    <div class="mx-auto px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-4 gap-4">
        <a
          v-for="product in products"
          :key="product.id"
          :href="'/products/' + product.id"
          class="group"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="product.images[0].src"
              :alt="product.images[0].alt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3
            class="mt-4 text-sm text-gray-700 dark:text-gray-200 tracking-wide"
          >
            {{ product.name }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900 dark:text-gray-50">
            {{ product.price }}
          </p>
        </a>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const screenWidth = ref(window.innerWidth);
const isPhone = computed(() => screenWidth.value <= 530);

// Watch for changes in the screen width
watchEffect(() => {
  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
  };

  // Call the update function initially
  updateScreenWidth();

  // Listen for the 'resize' event and update the screen width
  window.addEventListener("resize", updateScreenWidth);

  // Cleanup the event listener when the component is unmounted
  return () => {
    window.removeEventListener("resize", updateScreenWidth);
  };
});
</script>

<style lang="scss" scoped></style>
