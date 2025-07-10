<template>
    <header class="header">
        <div class="container">
            <router-link to="/" class="logo">FatihShop</router-link>
            <nav class="nav">
                <menulien v-for="link in routes.filter(route => !route.ignored)" :key="link.name" :name="link.name"
                    :url="link.path" />

                <menulien name="Connexion" url="/connexion" v-if="!authed.logged" />
                <menulien name="Inscription" url="/inscription" v-if="!authed.logged" />
                <a href="#" @click="authed.logoutAction" v-if="authed.logged">Déconnexion</a>
                <menulien :name="`Panier (${total.count}) `" url="/panier" v-if="authed.logged" />
            </nav>
        </div>
    </header>
</template>

<script setup>
import menulien from '@/components/menulien.vue';
import { routes } from '@/routes/routes';
import { auth } from '@/stores/authStore';

const authed = auth();

const prop = defineProps({
    total: Object,
})
</script>
