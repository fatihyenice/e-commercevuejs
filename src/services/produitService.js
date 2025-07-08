import { app } from "@/axios-config/config";

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