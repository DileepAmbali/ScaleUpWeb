<template>
	<Loading v-if="isLoading" />

	<template v-else>
		<div class="pt-6">
			<!-- Image gallery -->
			<div
				class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
			>
				<div
					class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
				>
					<img
						:src="
							baseService.baseURL +
							product.images[0].attributes.url
						"
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
					<div
						class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"
					>
						<img
							:src="
								baseService.baseURL +
								product.images[1].attributes.url
							"
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<div
						class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"
					>
						<img
							:src="
								baseService.baseURL +
								product.images[2].attributes.url
							"
							class="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
				<div
					class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
				>
					<img
						:src="
							baseService.baseURL +
							product.images[3].attributes.url
						"
						class="h-full w-full object-cover object-center"
					/>
				</div>
			</div>
			<!-- Product info -->
			<div
				class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
			>
				<div
					class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
				>
					<h1
						class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white"
					>
						{{ product.name }}
					</h1>
				</div>
				<!-- Options -->
				<div class="mt-4 lg:row-span-3 lg:mt-0">
					<h2 class="sr-only">Product information</h2>
					<p
						class="text-3xl tracking-tight text-gray-900 dark:text-white"
					>
						₹{{ product.price }}
					</p>

					<!-- Seller Details -->
					<div class="mt-6">
						<h3 class="sr-only">Seller</h3>
						<h3
							class="text-sm font-medium text-gray-900 dark:text-white"
						>
							Seller
						</h3>
						<p class="mt-1 text-sm text-gray-500">
							<a href="" class="hover:underline">
								{{ product.seller.companyName }}
							</a>
						</p>
					</div>

					<!-- Reviews -->
					<!-- <div class="mt-6">
						<h3 class="sr-only">Reviews</h3>
						<div class="flex items-center">
							<div class="flex items-center">
								<StarIcon
									v-for="rating in [0, 1, 2, 3, 4]"
									:key="rating"
									:class="[
										reviews.average > rating
											? 'text-yellow-300'
											: 'text-gray-200 dark:text-gray-900',
										'h-5 w-5 flex-shrink-0'
									]"
									aria-hidden="true"
								/>
							</div>
							<p class="sr-only">
								{{ reviews.average }} out of 5 stars
							</p>
							<a
								:href="reviews.href"
								class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-blue-400"
								>{{ reviews.totalCount }} reviews</a
							>
						</div>
					</div> -->
					<form class="mt-10">
						<!-- Colors -->
						<div v-if="product.colors">
							<h3 class="text-sm font-medium text-gray-900">
								Color
							</h3>
							<RadioGroup v-model="selectedColor" class="mt-4">
								<RadioGroupLabel class="sr-only"
									>Choose a color</RadioGroupLabel
								>
								<div class="flex items-center space-x-3">
									<RadioGroupOption
										as="template"
										v-for="color in product.colors"
										:key="color.name"
										:value="color"
										v-slot="{ active, checked }"
									>
										<div
											:class="[
												color.selectedClass,
												active && checked
													? 'ring ring-offset-1'
													: '',
												!active && checked
													? 'ring-2'
													: '',
												'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
											]"
										>
											<RadioGroupLabel
												as="span"
												class="sr-only"
												>{{
													color.name
												}}</RadioGroupLabel
											>
											<span
												aria-hidden="true"
												:class="[
													color.class,
													'h-8 w-8 rounded-full border border-black border-opacity-10'
												]"
											/>
										</div>
									</RadioGroupOption>
								</div>
							</RadioGroup>
						</div>
						<!-- Sizes -->
						<div class="mt-10">
							<div class="flex items-center justify-between">
								<h3
									class="text-sm font-medium text-gray-900 dark:text-white"
								>
									Size
								</h3>
							</div>
							<RadioGroup v-model="selectedSize" class="mt-4">
								<RadioGroupLabel class="sr-only"
									>Choose a size</RadioGroupLabel
								>
								<div
									class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
								>
									<RadioGroupOption
										as="template"
										v-for="size in product.sizes"
										:key="size.name"
										:value="size"
										:disabled="!size.inStock"
										v-slot="{ active, checked }"
									>
										<div
											:class="[
												size.inStock
													? 'cursor-pointer bg-white text-gray-900 shadow-sm'
													: 'cursor-not-allowed bg-gray-50 text-gray-200',
												active
													? 'ring-2 ring-indigo-500'
													: '',
												'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
											]"
										>
											<RadioGroupLabel as="span">{{
												size.name
											}}</RadioGroupLabel>
											<span
												v-if="size.inStock"
												:class="[
													active
														? 'border'
														: 'border-2',
													checked
														? 'border-indigo-500'
														: 'border-transparent',
													'pointer-events-none absolute -inset-px rounded-md'
												]"
												aria-hidden="true"
											/>
											<span
												v-else
												aria-hidden="true"
												class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
											>
												<svg
													class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
													viewBox="0 0 100 100"
													preserveAspectRatio="none"
													stroke="currentColor"
												>
													<line
														x1="0"
														y1="100"
														x2="100"
														y2="0"
														vector-effect="non-scaling-stroke"
													/>
												</svg>
											</span>
										</div>
									</RadioGroupOption>
								</div>
							</RadioGroup>
						</div>
						<button
							type="button"
							data-modal-target="defaultModal"
							data-modal-toggle="defaultModal"
							class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:ring-offset-blue-200"
						>
							Add to bag
						</button>
						<Modal />
					</form>
				</div>
				<div
					class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
				>
					<!-- Description and details -->
					<div>
						<h3 class="sr-only">Description</h3>
						<div class="space-y-6">
							<p
								class="text-base text-gray-900 dark:text-slate-300"
							>
								{{ product.description }}
							</p>
						</div>
					</div>
					<div class="mt-10">
						<h3
							class="text-sm font-medium text-gray-900 dark:text-slate-300"
						>
							Highlights
						</h3>
						<div class="mt-4">
							<ul
								role="list"
								class="list-disc space-y-2 pl-4 text-sm"
							>
								<li
									v-for="highlight in product.highlights"
									:key="highlight"
									class="text-gray-400"
								>
									<span
										class="text-gray-600 dark:text-gray-500"
										>{{ highlight }}</span
									>
								</li>
							</ul>
						</div>
					</div>
					<div class="mt-10">
						<h2
							class="text-sm font-medium text-gray-900 dark:text-slate-300"
						>
							Details
						</h2>
						<div class="mt-4 space-y-6">
							<p class="text-sm text-gray-600 dark:text-gray-500">
								{{ product.details }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</template>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute } from "vue-router"
import { StarIcon } from "@heroicons/vue/20/solid"
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue"

import Loading from "@/components/Loading.vue"
import Modal from "../../components/Modal.vue"

import ProductService from "../../services/ProductServices"
const productService = new ProductService()

import BaseService from "../../services/main"
const baseService = new BaseService()

const route = useRoute()
const id = route.params.productId
const isLoading = ref(true)

let product = {}

onMounted(async () => {
	try {
		product = await productService.getProductById(id)
	} catch (err) {
		console.error(err)
	} finally {
		if (!product) {
			return
		} else {
			console.log("Done loading product")
			console.log(product)
			isLoading.value = false
		}
	}
})

const reviews = { href: "#", average: 4, totalCount: 117 }

const selectedColor = computed(() => {
	return product.colors ? product.colors[0] : null
})

const selectedSize = ref(product.sizes ? product.sizes[2] : null)
</script>
