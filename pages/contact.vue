<template>
<h1>Nous contacter</h1>

<div>
    <form action="">
        <p>Veuillez renseignez ces champs pour me contacter pour tout problème :</p>
        <label for="">Nom</label>
        <input type="text" name="" id="">
        <label for="">Prenom</label>
        <input type="text">
        <label for=""> Titre du message </label>
        <input type="text" name="" id="">
        <label for="">Mesage </label>
        <input type="text">
        <button type="submit">Valider</button>
    </form>
</div>

<h2>Qui sommes nous ?</h2>

<p>
    Je suis Ludovic Faye, étudiant de 3ème année de MMI, à L'IUT BM. Je suis en spécialité de développement et voici mon site sur le thème de l'altérité et la culture générale participatif : Calendria
</p>
<h2>

Description du projet :
</h2>

<p>
    L’idée est de reprendre les jeux de culture générale disponible de base en papier, comme sont vendues par des libraires, mais en version web. Le format repose sur le calendrier de l’avent, ou un jour égale une question.
Mon idée est de reprendre ce concept mais en ligne avec l’ajout d’une fonction de réservation sur une semaine d’un mois, ou l’utilisateur serait apte à suggérer des questions avec réponses à la modération suivant des thèmes choisis aléatoirement sur une semaine choisie par l’user.

Le principe de réservation serait le suivant :
1er semaine du mois = réservation de la semaine 1 du mois suivant
2nd semaine du mois = réservation de la semaine 2 du mois suivant
3ème semaine du mois = réservation de la semaine 3 du mois suivant
4ème semaine du mois = réservation de la semaine 4 du mois suivant
ce serait donc en n+1 à chaque fois, mais néanmoins la semaine entière serait ouverte aux suggestions de  question et que si aucune question n’est validé, la modération complètera les blancs.
</p>

<h2>
    Fonctions du site : 
</h2>

<p>
    Compte user (mail & MDP + connexion & déconnexion)
Réservations sur un calendrier
CRUD sur les questions réponses et les dates
Potentiel ajout de notifications par une autre API
APi de calendrier possible 
Back-end par Supabase
Front-end par nuxtjs
</p>

<h2>
    Rapport avec l’altérité ? : 
</h2>

<p>
    L’altérité à pour définition “Etat, qualité de ce qui est autre, distinct ... ”, ce qui peut nous faire penser à la variété des cultures dans le monde, dans la variété d’ethnies ou de la variété de pays dans le monde, ce qui entend par là que dans le monde, il y a de la variété dans l’espèce humaines, avec toutes les différences qui vont avec. De mon point de vue, les différences sont nécessaires dans le monde afin de créer de la complémentarité et de la diversité dans la paysage, afin d(optimiser les chances de faire des créations, des innovations ou encore des découvertes ainsi que des exemples de lois ou de culture dans la variété...
Bien sur la diversité à aussi son lots de différence, qui entraine des débats et des divisions autour des sujets cibles et controversés, qui donne des moments de colère et d’insulte générale.

Mais le jeu de culture générale, avec la bonne modération, peut permettre d’exprimer le côté de chacun, car sur mon idée, le site donnera la possibilité aux users de pourvoir suggérer des questions de culture générale sur des thèmes qui seront ensuite validées par la modération et possiblement disponible aux autres participants du site afin d’être donné pour être résolue/répondu.
Par extension, le système de contribution se fera sur le long terme en ajoutant semaine par semaine cette contribution en explorant multiple thèmes qui seront joués aléatoirement afin de varier les questions proposées sur le site.
</p>


</template>
<style lang='scss' scoped>
h1{
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin: 3rem;
}
h2{
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin: 3rem;
}
p{
    margin: 3rem;
    text-align: center;
    font-size: 24px;
    line-height: 2.5rem;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #007BFF;
    box-shadow: 0px 4px 8px 0px rgba(#007BFF, 0.2);
    border-radius: 8px;
    margin: auto;
    max-width: 500px;
    margin-bottom: 5rem;

    p{
        color: white;
        font-size: 36px;
        font-weight: bold;
        line-height: 3rem;
    }

    label {
        color: #ffffff;
        margin: 0.5rem 0;
    }

    input[type="text"] {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: none;
        border-radius: 4px;
        width: 100%;
    }
    button {
        padding: 0.5rem 1rem;
        
        background-color: #007BFF;
        
        color: white;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
        height: 3rem;
        width: 8rem;
        font-size: 26px;
        border: 0.15rem white solid;
        border-radius: 0.5rem;

        &:hover {
            // background-color: darken(#ffffff, 10%);
            background-color: #ffffff;
            color: #007BFF;
        }   
    }
}
</style>

<script></script>