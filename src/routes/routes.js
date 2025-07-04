import Home from "@/views/Home.vue"
import Products from "@/views/Products.vue" 
import ProductsDetail from "@/views/ProductsDetail.vue"

export const routes = [
    { path: "/", component: Home, name: "Accueil", ignored: false },
    { path: "/produit", component: Products, name: "Nos produits", ignored: false }, 
    { path: "/produit-detail/:id", component: ProductsDetail, name: "Détail des produits", ignored: true }, 
]