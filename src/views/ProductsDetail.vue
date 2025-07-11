<template> 
    <alertSuccessVue :key="panier.success" v-if="panier.success">{{ panier.success }}</alertSuccessVue>
    <main class="page-produit" v-if="produit.produit">

        <div class="image-produit">
            <img :src="produit.produit.url" alt="produit.produit.nom_produit" />
        </div>
        <div class="infos-produit">
            <h2>{{ produit.produit.nom_produit }}</h2>
            <p class="prix">{{ produit.produit.prix }} €</p>
            <p class="description">
                {{ produit.produit.description }}
            </p>
            <boutton class="btn-secondary" v-if="authed.logged" @click="panier.ajoutPanier(route.params.id)">Ajouter au panier</boutton>
            <router-link to="/connexion" v-else>
                <boutton class="btn-connect">Ajouter au panier</boutton>
            </router-link>
        </div>
    </main>

    <div v-else>
        <div class="container">
            <img :src="notfound" alt="Introuvable !" class="notfound" width="500">
        </div>
    </div>
</template>

<script setup>
import { produitsStores } from '@/stores/produitStore';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import notfound from '/src/assets/images/404.png'
import boutton from '@/components/button.vue';
import { auth } from '@/stores/authStore';
import { panierStore } from '@/stores/panierStore'; 
import alertSuccessVue from '@/components/alert-success.vue'; 

const authed = auth(); 
const produit = produitsStores();
const panier = panierStore();
const route = useRoute();

onMounted(async () => {
    await produit.recupId(route.params.id);
});
</script>