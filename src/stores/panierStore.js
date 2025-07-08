import { fetchCountPanier } from "@/services/panierService";
import { defineStore } from "pinia" 
import { ref, watch } from "vue" 
import { useRoute } from "vue-router";

export const panierStore = defineStore('panierStore', () =>{
    const count = ref(0);
    const route = useRoute();

    const countPanier = async(iduser) => {
         try {
            const data = await fetchCountPanier(iduser);
            count.value = data;
         }catch(e){
            count.value = 0;
            throw e;
         }
    }

    watch(route, (newValeur) => {
        countPanier(1);
    })

    return {
        countPanier,
        count
    }
})