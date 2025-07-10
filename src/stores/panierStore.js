import { deleteproduitpanier, fetchCountPanier } from "@/services/panierService";
import { defineStore } from "pinia" 
import { ref, watch } from "vue" 
import { useRoute } from "vue-router";
import { fetchGetPanier } from "@/services/panierService";
import { addproduitpanier } from "@/services/panierService";
import { auth } from "./authStore"; 

export const panierStore = defineStore('panierStore', () =>{
    const count = ref(0);
    const route = useRoute();
    const mypanier = ref([]);
    const success = ref(false);

    const authed = auth();

    const countPanier = async() => {
       if(authed.logged){
            try {
                const data = await fetchCountPanier();
                count.value = data;
            }catch(e){
                count.value = 0;
                throw e;
            }
       }
    }

    const getMyPanier = async() => {
        try{
            const data = await fetchGetPanier();
            mypanier.value = data; 
        }catch(e){
            throw e;
        }
    }

    const refresh = () => {
        getMyPanier();
    }

    const ajoutPanier = async(idparam) => {
        try{
            const data = await addproduitpanier(idparam); 
            success.value = data.message;
            refresh();
            countPanier();
        }catch(e){
            throw e;
        }
    }

    const deleteProduit = async(idproduit) => {
        try{
            const response = await deleteproduitpanier(idproduit);
            success.value = response.message;
            refresh();
            countPanier();
        }catch(e){
            throw e
        }
    }
 
    watch(authed, (newVal, oldVal) => { 
        if (newVal.logged) {
          countPanier();
        } else {
          count.value = 0;
        }
      }, { immediate: true });

    return {
        countPanier,
        count,
        getMyPanier,
        mypanier,
        refresh, 
        ajoutPanier,
        success,
        deleteProduit
    }
})