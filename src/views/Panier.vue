<template>
    <section class="panier container" v-if="authed.logged">
        <div class="liste-produits">
            <h2>Votre Panier</h2>

            <alertSuccessVue :key="authed.timestamp" v-if="panier.success">{{ panier.success }}</alertSuccessVue>
            <button class="btn-refresh" @click="panier.refresh">Rafraîchir le panier</button>

            <cardPanier v-for="produit in panier.mypanier" :key="produit.id_panier" :nom="produit.nom_produit" :prix="produit.prix" :url="produit.url" :quantity="produit.quantity" @click="panier.deleteProduit(produit.id_produit)"/> 
        </div>

        <div class="resume-panier">
            <h3>Résumé</h3>
            <p>Sous-total : <span class="valeur">{{ total.toFixed(2) }} €</span></p>
            <p>Livraison : <span class="valeur">Gratuite</span></p>
            <hr>
            <p class="total">Total : <span class="valeur">{{ total.toFixed(2) }} €</span></p>
            <boutton @click="validate">Valider la commande</boutton>
        </div>
    </section>

    <div v-else>
        <router-link to="/connexion">
            <div class="alert-error">
                Vous devez vous connecter pour pouvoir afficher votre panier. Cliquez ici.
            </div>
        </router-link>
    </div>
</template>

<script setup> 
import alertSuccessVue from '@/components/alert-success.vue';
import boutton from '@/components/button.vue';
import cardPanier from '@/components/card-panier.vue';
import { auth } from '@/stores/authStore';
import { panierStore } from '@/stores/panierStore'; 
import { onMounted, computed } from 'vue';    

const panier = panierStore();
const authed = auth();
 
onMounted(() => {
panier.getMyPanier(); 
});

const total = computed(() =>
  panier.mypanier.reduce((acc, produit) => acc + produit.prix * produit.quantity, 0)
);
 
</script>