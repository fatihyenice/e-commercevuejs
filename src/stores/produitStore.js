import { defineStore } from "pinia"; 
import { getProduct } from "@/services/produitService";
import { ref } from "vue";

export const produitsStores = defineStore('produit', () => {
    const produit = ref(null)

    const recupId = async (id) => {
        try {
            const data = await getProduct(id);
            produit.value = data;
        } catch (error) {
            console.log("Impossible de récupérer le produit :", error);
        }
    }

    return {
        recupId,
        produit
    }
})