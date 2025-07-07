<template>
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
</template>