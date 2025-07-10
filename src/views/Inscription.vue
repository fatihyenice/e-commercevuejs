<template>
    <div v-if="!authed.logged">
        <section class="connexion container">
            <h2>Inscription</h2>
        </section>

        <div class="connexion-form">
            <form method="POST">
                <label>Votre nom: </label>
                <input type="text" placeholder="Yenice">
                <label>Votre prénom: </label>
                <input type="text" placeholder="Fatih">
                <label>Votre adresse mail: </label>
                <input type="email" placeholder="azerty@exemple.com">
                <label>Votre mot de passe: </label>
                <input type="password" placeholder="********">
                <label>Répetez votre mot de passe: </label>
                <input type="password" placeholder="********">
                <button type="button" class="btn-primary" id="connexion-btn">M'inscrire</button>
            </form>
        </div>
    </div>

    <div v-else>
        <router-link to="/">
            <div class="alert-error">
                Vous êtes déjà connecter, cliquez ici pour retourner à l'accueil.
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { auth } from "@/stores/authStore";
const authed = auth();
</script>