<template>
    <div v-if="!authed.logged">
        <section class="connexion container">
            <h2>Inscription</h2>
        </section>

        <alertErreurVue v-if="authed.errorregister">{{ authed.errorregister }}</alertErreurVue>
        <alertSuccessVue v-if="authed.successegister">{{ authed.successegister }}</alertSuccessVue>

        <div class="connexion-form">
            <form method="POST" @submit.prevent="authed.register">
                <label>Votre nom: </label>
                <input type="text" v-model="authed.nomregister" placeholder="Yenice">
                <label>Votre prénom: </label>
                <input type="text" v-model="authed.prenomregister" placeholder="Fatih">
                <label>Votre adresse mail: </label>
                <input type="email" v-model="authed.mailregister" placeholder="azerty@exemple.com">
                <label>Votre mot de passe: </label>
                <input type="password" v-model="authed.mdpregister" placeholder="********"> 
                <label>Répetez votre mot de passe: </label>
                <input type="password" placeholder="********"  v-model="authed.mdpdeuxregister">
                <button type="submit" class="btn-primary" id="connexion-btn" :disabled="!authed.nomregister || !authed.prenomregister || !authed.mailregister || !authed.mdpregister || !authed.mdpdeuxregister">M'inscrire</button>
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
import alertErreurVue from "@/components/alert-erreur.vue";
import alertSuccessVue from "@/components/alert-success.vue"; 
import { auth } from "@/stores/authStore";
const authed = auth(); 
</script>