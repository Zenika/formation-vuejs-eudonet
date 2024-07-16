import focusPlugin from '@/plugins/focus'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/main.css'

const app = createApp(App)

app.use(focusPlugin).use(router).use(createPinia())

app.mount('#app')
