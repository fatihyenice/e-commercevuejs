<template>
    <main class="page-produit" v-if="produit.produit">
        <div class="image-produit">
            <img :src="produit.produit.url" alt="Montre Classique" />
        </div>
        <div class="infos-produit">
            <h2>{{ produit.produit.nom_produit }}</h2>
            <p class="prix">{{ produit.produit.prix }} €</p>
            <p class="description">
                {{ produit.produit.description }}
            </p>
            <boutton class="btn-secondary">Ajouter au panier</boutton>
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

const produit = produitsStores();
const route = useRoute();

onMounted(async () => {
    await produit.recupId(route.params.id);
});
</script>