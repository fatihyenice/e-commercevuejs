import { app } from "@/axios-config/config";
import { watch } from "vue";

export async function fetchProducts(){
    try {
        const response = await app.get("/api/products")
        return response.data;
    }catch(e) {
        console.error('Erreur lors de la récupération des produits :', error)
        throw error
    }
}

export async function fetchAllProducts(){
    try{
        const response = await app.get("/api/products/nolimit")
        return response.data;
    }catch(e) {
        console.error('Erreur lors de la récupération des produits :', error)
        throw error
    }
}

export function setupFiltre(filtreActif, allProducts, filteredProducts) {
    return watch(filtreActif, (nouveauFiltre) => {
        switch (nouveauFiltre) {
        case 'moinsTrente':
            filteredProducts.value = allProducts.value.filter(p => p.prix < 30);
            break;
        case 'trenteCinquante':
            filteredProducts.value = allProducts.value.filter(p => p.prix >= 30 && p.prix <= 50);
            break;
        case 'cinquantePlus':
            filteredProducts.value = allProducts.value.filter(p => p.prix > 50);
            break;
        case 'nofiltre':
        default:
            filteredProducts.value = allProducts.value;
            break;
        }
    });
}

export async function FetchgetProduct(productId){
    try {
        const response = await app.post("/api/products/idproduct", {
            idproduct: productId
        })
        return response.data;
    }catch(e) {
        console.error("Impossible d'executer la requête !");
        throw e;
    }
}