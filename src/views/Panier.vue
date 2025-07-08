<template>
    <section class="panier container">
        <div class="liste-produits">
            <h2>Votre Panier</h2>

            <button class="btn-refresh">Rafraîchir le panier</button>

            <div class="carte-produit-panier">
                <img src="https://placehold.co/100x100/EEE/31343C" alt="Produit 1">
                <div class="infos-produit-panier">
                    <h3>Produit 1</h3>
                    <p class="prix">25,00 €</p>
                    <p class="quantite">Quantité : 1</p>
                </div>
                <boutton>Retirer</boutton>
            </div>
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
</script>