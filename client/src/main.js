import "./assets/main.css"
import "primevue/resources/themes/lara-light-indigo/theme.css" //theme
import "primevue/resources/primevue.min.css" //core

import "primeicons/primeicons.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config"

import App from "./App.vue"
import router from "./router"
import vue3GoogleLogin from "vue3-google-login"

// !Dead Code
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(vue3GoogleLogin, {
	clientId:
		"324515309378-m9e6agbnd1ghre1m8emgfp6eh377hvdk.apps.googleusercontent.com"
})

app.mount("#app")
