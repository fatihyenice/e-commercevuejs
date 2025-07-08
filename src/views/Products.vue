<template>
    <main class="products-with-filters">
        <h2>Tous nos produits</h2>
        <div class="products-layout">
            <aside class="filtre-bloc">
                <h3>Filtrer par</h3>
                <div class="filtre-section">
                    <label>
                        <input type="radio" name="filtre-prix" value="moinsTrente" v-model="filtreActif" />
                        Moins de 30 €
                    </label>
                    <label>
                        <input type="radio" name="filtre-prix" value="trenteCinquante" v-model="filtreActif" />
                        30 € - 50 €
                    </label>
                    <label>
                        <input type="radio" name="filtre-prix" value="cinquantePlus" v-model="filtreActif" />
                        Plus de 50 €
                    </label>
                    <label>
                        <input type="radio" name="filtre-prix" value="nofiltre" v-model="filtreActif" />
                        Aucun filtres
                    </label>
                </div>
            </aside>

            <div class="grid">
                <router-link :to="`/produit-detail/${produit.id_produit}`" v-for="produit in filteredProducts"
                    :key="produit.id_produit">
                    <productCard :nom="produit.nom_produit" :prix="produit.prix" :urlimage="produit.url" />
                </router-link>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { fetchAllProducts, setupFiltre } from '@/services/produitService';
import productCard from '@/components/product-card.vue';

const allProducts = ref([]);
const filteredProducts = ref([]);
const filtreActif = ref('nofiltre');

setupFiltre(filtreActif, allProducts, filteredProducts);

onMounted(async () => {
    try {
        const res = await fetchAllProducts();
        allProducts.value = res;
        filteredProducts.value = res;
    } catch (e) {
        console.error('Impossible de récuperer toute la liste de produits !');
    }
});

</script>
