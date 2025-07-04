import './assets/styles/app.css'
import { routes } from './routes/routes';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.mount("#app");