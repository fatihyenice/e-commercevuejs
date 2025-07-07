import Connexion from "@/views/Connexion.vue" 
import Home from "@/views/Home.vue"
import Inscription from "@/views/Inscription.vue"
import Panier from "@/views/Panier.vue"
import Products from "@/views/Products.vue" 
import ProductsDetail from "@/views/ProductsDetail.vue"  

export const routes = [
    { path: "/", component: Home, name: "Accueil", ignored: false },
    { path: "/produit", component: Products, name: "Nos produits", ignored: false }, 
    { path: "/connexion", component: Connexion, name: "Connexion", ignored: false }, 
    { path: "/inscription", component: Inscription, name: "Inscription", ignored: false }, 
    { path: "/panier", component: Panier, name: "Panier", ignored: false }, 
    { path: "/produit-detail/:id", component: ProductsDetail, name: "Détail des produits", ignored: true }, 
]