<template>
  <div class="max-w-screen-md mx-auto">
    <div class="text-3xl p-8 font-bold dark:text-white">Your Cart</div>
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li
        v-for="product in products"
        :key="product.id"
        class="p-2 px-8 odd:bg-slate-50 dark:odd:bg-[#19212c6d]"
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
                class="text-xl font-medium text-gray-900 truncate dark:text-white"
              >
                {{ product.name }}
              </p>
            </div>
            <div
              class="text-2xl inline-flex items-center font-semibold text-gray-900 dark:text-white"
            >
              {{ product.price }}
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div>
      <!-- Total price -->
      <div class="p-8 text-right">
        <div class="text-2xl dark:text-white text-right inline">
          Total:
          <div class="inline">
            ${{
              products.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end p-8">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import AllProductList from "../components/AllProductList.vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const products = computed(() => userStore.user.cart);
console.log("products:");
console.log(products.value);
</script>

<style lang="scss" scoped></style>
