import focusPlugin from '@/plugins/focus'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(focusPlugin)

/**
 * Alternative option
 */
// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//   },
// })

app.mount('#app')
