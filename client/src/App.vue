<script setup>
import { RouterView, RouterLink } from "vue-router"

import HomeView from "./views/HomeView.vue"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import { decodeCredential } from "vue3-google-login"
const callback = (response) => {
	// decodeCredential will retrive the JWT payload from the credential
	const userData = decodeCredential(response.credential)
	console.log("Handle the userData", userData)
}
</script>

<template>
	<Navbar />

	<RouterView />

	<Footer />
</template>

<style scoped></style>
