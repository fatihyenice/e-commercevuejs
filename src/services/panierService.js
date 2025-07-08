import { app } from "@/axios-config/config"

export async function fetchCountPanier(userid) {
    try {
        const response = await app.post("/api/panier/countpanier", {
            id: userid
        })
        return response.data;
    }catch(e) {
        console.log("Impossible d'executer la requête !")
        throw e
    }
}