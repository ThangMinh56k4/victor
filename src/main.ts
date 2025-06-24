import './assets/scss/main.scss'
import '/node_modules/flag-icons/css/flag-icons.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import configI18n from './plugins/i18n'
import { FontAwesomeIcon } from './plugins/font-awesome'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n(configI18n)

app.use(createPinia())
app.use(router)
app.use(i18n)

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
