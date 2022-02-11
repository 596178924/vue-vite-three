import { createApp } from 'vue';
import App from './App.vue';
import router from "./utils/routers/index";
import './assets/styles/common.css'
const app = createApp(App)
app.use(router);
app.mount('#app')
