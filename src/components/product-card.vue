<template>
    <article class="product-card">
        <img :src="urlimage" :alt="`Image du produit ${nom}`" />
        <h3>{{ nom }}</h3>
        <p>{{ prix }} €</p>
        <boutton>Ajouter au panier</boutton>
    </article>
</template>

<script setup>
import boutton from './button.vue';

const props = defineProps({
    nom: String,
    prix: String,
    urlimage: String,
})
</script>