import Home from "@/views/Home.vue"
import Products from "@/views/Products.vue"

export const routes = [
    { path: "/", component: Home, name: "Accueil" },
    { path: "/produit", component: Products, name: "Nos produits"  },
]