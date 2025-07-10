<template>
    <div v-if="!authed.logged">
        <section class="connexion container">
            <h2>Connexion</h2>
        </section>

        <alertErreur v-if="authed.alerterror">{{ authed.alerterror }}</alertErreur>
        <AlertSuccess v-if="authed.alertsuccess">{{ authed.alertsuccess }}</AlertSuccess>

        <div class="connexion-form">
            <form method="POST" @submit.prevent="seConnecter">
                <label>Votre adresse mail: </label>
                <input type="email" placeholder="azerty@exemple.com" v-model="authed.email">
                <label>Votre mot de passe: </label>
                <input type="password" placeholder="********" v-model="authed.password">
                <button type="submit" class="btn-primary" :disabled="!authed.email || !authed.password"
                    id="connexion-btn">Me
                    connecter</button>
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
import alertErreur from '@/components/alert-erreur.vue';
import AlertSuccess from '@/components/alert-success.vue';
import { auth } from '@/stores/authStore'; 
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authed = auth(); 

const router = useRouter();

const seConnecter = async () => {
  try {
    await authed.loggin(); 
    if (authed.logged) {
      router.push('/');   
    }
  } catch (e) {
    console.error("Erreur lors de la connexion", e);
  }
}; 
</script>