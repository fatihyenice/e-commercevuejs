<template>
  <Header :total="panier.count" />
  <RouterView></RouterView>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import Header from './layouts/Header.vue';
import { panierStore } from './stores/panierStore';
import { useRoute } from 'vue-router';

const panier = panierStore();

onMounted(async () => {
  try {
    await panier.countPanier(1);
  } catch (e) {
    throw e
  }
})

</script>