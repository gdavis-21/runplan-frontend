import './assets/main.css'

import { createApp } from 'vue'
import router from '/src/router/index.js'
import App from './App.vue'

let DEBUG = false;
let BASE_URL = ""
BASE_URL = DEBUG ? "http://127.0.0.1:8000" : "https://run-plan-backend-32d52423f1dc.herokuapp.com"
export { BASE_URL }
   

const app = createApp(App)
app.use(router)
app.mount('#app')
