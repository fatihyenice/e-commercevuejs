import Connexion from "@/views/Connexion.vue" 
import Home from "@/views/Home.vue"
import Inscription from "@/views/Inscription.vue"
import Panier from "@/views/Panier.vue"
import Products from "@/views/Products.vue" 
import ProductsDetail from "@/views/ProductsDetail.vue"   
import addProduit from "@/views/addProduit.vue"   

export const routes = [
    { path: "/", component: Home, name: "Accueil", ignored: false },
    { path: "/produit", component: Products, name: "Nos produits", ignored: false }, 
    { path: "/add-product", component: addProduit, name: "Ajouter un produit", ignored: true }, 
    { path: "/connexion", component: Connexion, name: "Connexion", ignored: true }, 
    { path: "/inscription", component: Inscription, name: "Inscription", ignored: true }, 
    { path: "/panier", component: Panier, name: "Panier", ignored: true }, 
    { path: "/produit-detail/:id", component: ProductsDetail, name: "Détail des produits", ignored: true }, 
]