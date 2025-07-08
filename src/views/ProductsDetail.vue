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
            <button class="btn-primary">Ajouter au panier</button>
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

const produit = produitsStores();
const route = useRoute();

onMounted(async () => {
    await produit.recupId(route.params.id);
});
</script>