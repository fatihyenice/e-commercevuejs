<template>
  <div class="page-produit" v-if="authed.logged">
    <div class="form-ajout-produit">
      <h2 class="form-title">Ajouter un nouveau produit</h2>

      <alertErreur v-if="panier.erreurAlertAddProd">{{
        panier.erreurAlertAddProd
      }}</alertErreur>

      <AlertSuccess v-if="panier.successAlertAddProd">{{
        panier.successAlertAddProd
      }}</AlertSuccess>

      <form class="form-contenu" @submit.prevent="panier.ajoutProduit">
        <div class="form-champ">
          <label for="nom">Nom du produit</label>
          <input id="nom" type="text" v-model="panier.nomproduitadd" required />
        </div>

        <div class="form-champ">
          <label for="prix">Prix (€)</label>
          <input
            id="prix"
            type="number"
            v-model="panier.prixproduitadd"
            step="0.01"
            required
          />
        </div>

        <div class="form-champ">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="panier.descriptionproduitadd"
            required
            rows="4"
          />
        </div>

        <div class="form-champ">
          <label for="image">URL de l’image</label>
          <input
            id="image"
            type="url"
            v-model="panier.urlproduitadd"
            required
          />
        </div>

        <button type="submit" class="btn-primary">Ajouter le produit</button>
      </form>
    </div>
  </div>

  <div v-else>
    <router-link to="/connexion">
      <div class="alert-error">
        Vous devez être connecter, cliquez ici pour connecter.
      </div>
    </router-link>
  </div>
</template>

<script setup>
import alertErreur from "@/components/alert-erreur.vue";
import AlertSuccess from "@/components/alert-success.vue";
import { auth } from "@/stores/authStore";
import { panierStore } from "@/stores/panierStore";

const authed = auth();
const panier = panierStore();
</script>