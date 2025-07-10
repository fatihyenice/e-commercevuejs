import { app } from "@/axios-config/config"

export async function fetchCountPanier() {
    try {
        const response = await app.post("/api/panier/countpanier")
        return response.data;
    }catch(e) {
        console.log("Impossible d'executer la requête !")
        throw e
    }
}

export async function fetchGetPanier(){
    try {
        const response = await app.post('/api/panier/getpanier')
        return response.data
    }catch(e){
        console.log("Impossible de récuperer le panier");
        throw e
    }
}