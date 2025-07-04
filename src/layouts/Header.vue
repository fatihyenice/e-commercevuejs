<template>
    <header class="header">
        <div class="container">
            <router-link to="/" class="logo">FatihShop</router-link>
            <nav class="nav">
                <menulien v-for="link in routes.filter(route => !route.ignored)" :key="link.name" :name="link.name"
                    :url="link.path" />
            </nav>
        </div>
    </header>
</template>

<script setup>
import menulien from '@/components/menulien.vue';
import { routes } from '@/routes/routes';
</script>
