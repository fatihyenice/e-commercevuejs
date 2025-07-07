<template>
    <section class="panier container">
        <div class="liste-produits">
            <h2>Votre Panier</h2>

            <div class="carte-produit-panier">
                <img src="https://placehold.co/100x100/EEE/31343C" alt="Produit 1">
                <div class="infos-produit-panier">
                    <h3>Produit 1</h3>
                    <p class="prix">25,00 €</p>
                    <p class="quantite">Quantité : 1</p>
                </div>
                <button class="btn-secondary">Retirer</button>
            </div>

            <div class="carte-produit-panier">
                <img src="https://placehold.co/100x100/EEE/31343C" alt="Produit 2">
                <div class="infos-produit-panier">
                    <h3>Produit 2</h3>
                    <p class="prix">40,00 €</p>
                    <p class="quantite">Quantité : 2</p>
                </div>
                <button class="btn-secondary">Retirer</button>
            </div>
        </div>

        <div class="resume-panier">
            <h3>Résumé</h3>
            <p>Sous-total : <span class="valeur">105,00 €</span></p>
            <p>Livraison : <span class="valeur">Gratuite</span></p>
            <hr>
            <p class="total">Total : <span class="valeur">105,00 €</span></p>
            <button class="btn-primary">Valider la commande</button>
        </div>
    </section>
</template>