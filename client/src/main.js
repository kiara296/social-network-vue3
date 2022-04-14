import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index"

createApp(App).mount('#app')

createApp(App).use(router).mount('#app')



