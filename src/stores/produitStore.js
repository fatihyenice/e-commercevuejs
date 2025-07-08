import { FetchgetProduct } from "@/services/produitService";
import { defineStore } from "pinia";  
import { ref } from "vue";

export const produitsStores = defineStore('produit', () => {
    const produit = ref(null)

    const recupId = async (id) => {
        try {
            const data = await FetchgetProduct(id);
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