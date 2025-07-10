<template>
    <article class="product-card">
        <img :src="urlimage" :alt="`Image du produit ${nom}`" />
        <h3>{{ nom }}</h3>
        <p>{{ prix }} €</p>
        <boutton v-if="authed.logged">Ajouter au panier</boutton>
    </article>
</template>

<script setup>
import boutton from './button.vue';
import { auth } from '@/stores/authStore';

const authed = auth();

const props = defineProps({
    nom: String,
    prix: String,
    urlimage: String,
})
</script>