<template>
  <div>
    <button
      id="dropdownUserAvatarButton"
      data-dropdown-toggle="dropdownAvatar"
      class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      type="button"
    >
      <span class="sr-only">Open user menu</span>
      <img class="w-8 h-8 rounded-full" :src="userDP" alt="user photo" />
    </button>
    <!-- Dropdown menu -->
    <UserDropDownMenu class="hidden" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import UserDropDownMenu from "./UserDropDownMenu.vue";

const userDP = computed(() => {
  return localStorage.getItem("userDP")
    ? localStorage.getItem("userDP")
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png";
});

// const props = defineProps({
//   usersName: {
//     type: String,
//     required: true,
//   },
//   usersEmailId: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: String,
//     required: true,
//   },
//   isCustomer: {
//     type: Boolean,
//     required: true,
//   },
// });
</script>

<style lang="scss" scoped></style>
