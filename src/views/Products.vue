<template>
    <main class="products">
        <h2>Tous nos produits</h2>
        <div class="grid">
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71-Pq1fOnzL._UF1000,1000_QL80_.jpg" alt="Produit 1" />
                <h3>Produit 1</h3>
                <p>25 €</p>
                <router-link to="/produit-detail/1">
                    <button class="btn-secondary">Voir plus</button>
                </router-link>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71-Pq1fOnzL._UF1000,1000_QL80_.jpg" alt="Produit 2" />
                <h3>Produit 2</h3>
                <p>30 €</p>
                <router-link to="/produit-detail/1">
                    <button class="btn-secondary">Voir plus</button>
                </router-link>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71-Pq1fOnzL._UF1000,1000_QL80_.jpg" alt="Produit 3" />
                <h3>Produit 3</h3>
                <p>40 €</p>
                <router-link to="/produit-detail/1">
                    <button class="btn-secondary">Voir plus</button>
                </router-link>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71-Pq1fOnzL._UF1000,1000_QL80_.jpg" alt="Produit 4" />
                <h3>Produit 4</h3>
                <p>50 €</p>
                <router-link to="/produit-detail/1">
                    <button class="btn-secondary">Voir plus</button>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>