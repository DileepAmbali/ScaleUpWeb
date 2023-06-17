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
						<ArrowLeftIcon
							class="h-6 dark:text-white flex self-center"
						/>
						<div class="text-lg dark:text-white">Back</div>
					</div>
				</div>
				<div
					class="text-3xl md:text-4xl font-extrabold dark:text-white"
				>
					Your Profile
				</div>
				<div class="flex-1"></div>
			</div>
			<div class="mt-4 py-4 text-xl font-semibold dark:text-white">
				User Details
			</div>
			<span class="font-normal text-sm">
				<button
					type="button"
					class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mb-8 text-xs flex justify-center items-center gap-2"
				>
					<PencilSquareIcon class="h-4" />

					<span class="">Edit User Details</span>
				</button>
			</span>
			<form>
				<div
					class="grid gap-6 mb-6 md:grid-cols-2 border-b-2 dark:border-gray-700"
				>
					<div>
						<label
							for="name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Name</label
						>
						<input
							type="text"
							id="name"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.username"
							:disabled="!isEditing"
						/>
					</div>
					<div>
						<label
							for="company"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last name</label
						>
						<input
							type="text"
							id="company"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.companyName"
							:disabled="!isEditing"
						/>
					</div>
					<!-- <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Company</label
            >
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div> -->
					<div>
						<label
							for="phone"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone number</label
						>
						<input
							type="tel"
							id="phone"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.phone"
							pattern="[0-9]{10}"
							:disabled="!isEditing"
						/>
					</div>
					<!-- <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Website URL</label
            >
            <input
              type="url"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com"
              required
            />
          </div> -->
					<!-- <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Unique visitors (per month)</label
            >
            <input
              type="number"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div> -->
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email address</label
						>
						<input
							type="email"
							id="email"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.email"
							:disabled="!isEditing"
						/>
					</div>
				</div>
				<button
					type="submit"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Save User Details
				</button>
			</form>
			<form @submit.prevent="handlePasswordChange">
				<div class="text-xl dark:text-white my-8 md:pt-8">
					Change Password?
				</div>

				<div class="mb-6">
					<label
						for="currentPassword"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Current Password</label
					>
					<input
						type="password"
						id="currentPassword"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="•••••••••"
						v-model="password.current"
					/>
				</div>
				<div class="mb-6">
					<label
						for="newPassword"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>New Password</label
					>
					<input
						type="password"
						id="newPassword"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="•••••••••"
						v-model="password.new"
					/>
				</div>
				<div class="mb-6">
					<label
						for="confirm_password"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Confirm New Password</label
					>
					<input
						type="password"
						id="confirm_password"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="•••••••••"
						v-model="password.confirm"
					/>
				</div>

				<button
					type="submit"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Change Password
				</button>
			</form>

			<!-- Form to add products if is a merchant else dont render -->
			<div class="mt-4 py-4 text-xl font-semibold dark:text-white">
				Add Products
			</div>
			<form
				action="submit"
				@submit.prevent="handleProductAddition"
				v-if="user.role.type === 'merchant'"
			>
				<div
					class="grid gap-6 mb-6 md:grid-cols-2 border-b-2 dark:border-gray-700"
				>
					<div>
						<label
							for="name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Name</label
						>
						<input
							type="text"
							id="name"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.username"
							:disabled="!isEditing"
						/>
					</div>
					<div>
						<label
							for="company"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last name</label
						>
						<input
							type="text"
							id="company"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.companyName"
							:disabled="!isEditing"
						/>
					</div>

					<div>
						<label
							for="phone"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone number</label
						>
						<input
							type="tel"
							id="phone"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.phone"
							pattern="[0-9]{10}"
							:disabled="!isEditing"
						/>
					</div>

					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email address</label
						>
						<input
							type="email"
							id="email"
							:class="
								isEditing
									? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									: ' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
							"
							v-model="user.email"
							:disabled="!isEditing"
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ArrowLeftIcon, PencilSquareIcon } from "@heroicons/vue/24/outline"
import { computed, ref, watch, watchEffect } from "vue"

//get user from local storage
const user = computed(() => {
	return JSON.parse(localStorage.getItem("user"))
}).value

const password = ref({
	current: "",
	new: "",
	confirm: ""
})

//when password form is filled out, check if new password matches confirm password
watchEffect(() => {
	if (password.value.new !== password.value.confirm) {
		console.log("passwords do not match")
	}
})

const handleUserDetailsSubmit = (e) => {
	e.preventDefault()
	console.log("user details submitted")
}

const handlePasswordChange = (e) => {
	e.preventDefault()
	console.log("password change submitted")
}
// handle password submit

const isEditing = false
</script>

<style lang="scss" scoped></style>
