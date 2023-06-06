<template>
  <div>
    <a href="\">
      <div
        class="flex justify-center items-center mb-4 bg-gray-100 dark:bg-gray-900 p-8 text-xl font-bold"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <div class="dark:text-white">ScaleUpWeb</div>
      </div>
    </a>
    <div class="px-4 lg:mx-auto lg:max-w-screen-lg pb-12 md:pb-20">
      <div class="mt-16 flex justify-between">
        <div class="flex-1 flex items-center">
          <div
            class="flex gap-2 p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            @click="$router.back()"
          >
            <ArrowLeftIcon class="h-6 dark:text-white flex self-center" />
            <div class="text-lg dark:text-white">Back</div>
          </div>
        </div>
        <div class="text-3xl md:text-4xl font-extrabold dark:text-white">
          Your Past Orders
        </div>
        <div class="flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
</script>

<style lang="scss" scoped></style>
