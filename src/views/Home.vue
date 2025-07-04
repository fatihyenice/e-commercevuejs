<template>
    <section class="hero">
        <div class="filtre">
            <h1>FatihWhey<br /><span class="highlight">Booste ta performance</span></h1>
            <p>Découvre nos protéines de qualité premium de musculation.
                de récupération.</p>
            <button class="btn-primary">Voir les produits</button>
        </div>
    </section>

    <section class="products">
        <h2>Nos meilleures protéines</h2>
        <div class="grid">
            <article class="product-card">
                <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80"
                    alt="Whey Isolate Vanille" />
                <h3>Whey Isolate Vanille</h3>
                <p>39,90 €</p>
                <boutton>Ajouter au panier</boutton>
            </article>
            <article class="product-card">
                <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80"
                    alt="Whey Chocolat" />
                <h3>Whey Protéine Chocolat</h3>
                <p>34,90 €</p>
                <boutton>Ajouter au panier</boutton>
            </article>
            <article class="product-card">
                <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80"
                    alt="Protéine Vegan" />
                <h3>Protéine Vegan Nature</h3>
                <p>29,90 €</p>
                <boutton>Ajouter au panier</boutton>
            </article>
            <article class="product-card">
                <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80"
                    alt="Pack découverte" />
                <h3>Pack Découverte 3 Saveurs</h3>
                <p>54,90 €</p>
                <boutton>Ajouter au panier</boutton>
            </article>
        </div>
    </section>

    <section class="about">
        <div>
            <h2>Pourquoi choisir FatihWhey ?</h2>
            <p>Nos produits sont conçus avec des ingrédients de haute qualité, testés en laboratoire et formulés pour
                maximiser tes performances. Que tu sois athlète ou amateur de fitness, notre whey t'accompagne à chaque
                étape.</p>
        </div>
    </section>
</template>

<script setup>
import boutton from '@/components/boutton.vue';
</script>
