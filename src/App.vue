<template>
  <Header :total="panier.count" />
  <RouterView></RouterView>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import Header from './layouts/Header.vue';
import { panierStore } from './stores/panierStore';
import { useRoute } from 'vue-router';
import { auth } from './stores/authStore';

const panier = panierStore();
const authe = auth();

onMounted(async () => {
  try {
    await panier.countPanier(1);
    await authe.checkSession();
  } catch (e) {
    throw e
  }
});

</script>