import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app')
app.config.globalProperties.$axios = axios;
axios.defaults.baseURL = "http://localhost:8144/over";
axios.defaults.timeout = 10000;

