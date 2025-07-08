<template>
    <main class="products-with-filters">
        <h2>Tous nos produits</h2>
        <div class="products-layout">
            <aside class="filtre-bloc">
                <h3>Filtrer par</h3>
                <div class="filtre-section">
                    <label>
                        <input type="checkbox" />
                        Moins de 30 € {{ }}
                    </label>
                    <label>
                        <input type="checkbox" />
                        30 € - 50 €
                    </label>
                    <label>
                        <input type="checkbox" />
                        Plus de 50 €
                    </label>
                </div>
            </aside>

            <div class="grid">
                <productCard :nom="produit.nom_produit" :prix="produit.prix" :urlimage="produit.url"
                    v-for="produit in allProducts" :key="produit.id_produit" />
            </div>
        </div>
    </main>
</template>

<script setup>
import { fetchAllProducts } from '@/services/produitService';
import productCard from '@/components/product-card.vue';
import { onMounted, ref } from 'vue';

const allProducts = ref([]);

onMounted(async () => {
    try {
        const res = await fetchAllProducts();
        allProducts.value = res;
    } catch (e) {
        console.error("Impossible de récuperer toute la liste de produits !");
    }
})
</script>