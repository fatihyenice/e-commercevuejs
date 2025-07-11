import './assets/styles/app.css'
import { routes } from './routes/routes';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'; 
import { auth } from './stores/authStore';
import { panierStore } from './stores/panierStore';  

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const authStore = auth();   
const panier = panierStore();

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    await authStore.checkSession(); 
    await panier.countPanier();
    
    panier.success = false;
    authStore.alerterror = false;
    authStore.alertsuccess = false;
    authStore.errorregister = false;
    authStore.successegister = false;

    next();
});

setInterval(() => {
    authStore.checkSession();
}, 60000);

app.use(router);
app.mount("#app");
