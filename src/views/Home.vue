<template>
    <section class="hero">
        <div class="filtre">
            <h1>FatihWhey<br /><span class="highlight">Booste ta performance</span></h1>
            <p>Découvre nos protéines de qualité premium de musculation.
                de récupération.</p>
            <router-link to="/produit">
                <button class="btn-primary">Voir les produits</button>
            </router-link>
        </div>
    </section>

    <section class="products">
        <h2>Nos meilleures protéines</h2>
        <div class="grid">
            <productCard :nom="produit.nom_produit" :prix="produit.prix" :urlimage="produit.url"
                v-for="produit in produits" :key="produit.id_produit" />
        </div>
    </section>

    <section class="about">
        <div>
            <h2>Pourquoi choisir FatihWhey ?</h2>
            <p>Nos produits sont conçus avec des ingrédients de haute qualité, testés en laboratoire et formulés pour
                maximiser tes performances. Que tu sois athlète ou amateur de fitness, notre whey t'accompagne à chaque
                étape.</p>
        </div>
    </section>
</template>

<script setup>
import productCard from '@/components/product-card.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { fetchProducts } from '@/services/produitService';

const produits = ref([]);

onMounted(async () => {
    try {
        const resdata = await fetchProducts();
        produits.value = resdata
    } catch (error) {
        console.error('Erreur lors du chargement des produits', error);
    }
}); 
</script>
