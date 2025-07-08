<template>
    <article class="product-card">
        <img :src="urlimage" :alt="`Image du produit ${nom}`" />
        <h3>{{ nom }}</h3>
        <p>{{ prix }} €</p>
        <boutton class="btn-primary">Ajouter au panier</boutton>
    </article>
</template>

<script setup>
const props = defineProps({
    nom: String,
    prix: Number,
    urlimage: String,
})
</script>