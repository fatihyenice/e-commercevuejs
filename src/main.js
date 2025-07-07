import './assets/styles/app.css'
import { routes } from './routes/routes';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'; 

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(pinia);
app.use(router);
app.mount("#app");