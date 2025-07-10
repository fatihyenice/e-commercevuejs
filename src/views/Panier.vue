<template>
    <section class="panier container">
        <div class="liste-produits">
            <h2>Votre Panier</h2>

            <button class="btn-refresh">Rafraîchir le panier</button>

            <cardPanier v-if="panier.mypanier" nom="Protéine whey" prix="32" url="https://placehold.co/100x100/EEE/31343C" quantity="10" />
        </div>

        <div class="resume-panier">
            <h3>Résumé</h3>
            <p>Sous-total : <span class="valeur">105,00 €</span></p>
            <p>Livraison : <span class="valeur">Gratuite</span></p>
            <hr>
            <p class="total">Total : <span class="valeur">105,00 €</span></p>
            <boutton>Valider la commande</boutton>
        </div>
    </section>
</template>

<script setup>
import boutton from '@/components/button.vue';
import cardPanier from '@/components/card-panier.vue';
import { panierStore } from '@/stores/panierStore'; 
import { onMounted } from 'vue';

const panier = panierStore();

onMounted(() => {
    panier.getMyPanier();
})
</script>