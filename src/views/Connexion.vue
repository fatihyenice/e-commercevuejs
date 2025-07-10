<template>
    <div v-if="!authentication.logged">
        <section class="connexion container">
            <h2>Connexion</h2>
        </section>

        <alertErreur v-if="authentication.alerterror">{{ authentication.alerterror }}</alertErreur>
        <AlertSuccess v-if="authentication.alertsuccess">{{ authentication.alertsuccess }}</AlertSuccess>

        <div class="connexion-form">
            <form method="POST">
                <label>Votre adresse mail: </label>
                <input type="email" placeholder="azerty@exemple.com" v-model="authentication.email">
                <label>Votre mot de passe: </label>
                <input type="password" placeholder="********" v-model="authentication.password">
                <button type="button" class="btn-primary" :disabled="!authentication.email || !authentication.password"
                    id="connexion-btn" @click="authentication.loggin">Me
                    connecter</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import alertErreur from '@/components/alert-erreur.vue';
import AlertSuccess from '@/components/alert-success.vue';
import { auth } from '@/stores/authStore'; 

const authentication = auth(); 
</script>