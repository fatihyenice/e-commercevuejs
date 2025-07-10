<template>
    <div class="carte-produit-panier">
        <img :src="url" :alt="nom">
        <div class="infos-produit-panier">
            <h3>{{ nom }}</h3>
            <p class="prix">{{ prix }} €</p>
            <p class="quantite">Quantité : {{ quantity }}</p>
        </div>
        <boutton class="btn btn-primary">Retirer</boutton>
    </div>
</template>

<script setup>
const props = defineProps({
    nom: String,
    prix: Number,
    quantity: Number,
    url: String,
})
</script>