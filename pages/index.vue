<template>
<heroHome/>
<!--page acceuil contenu a définir ici-->
<div>
    <div>
        <h2>
            Voici ce qui vous attend sur Calendria :
        </h2>
    </div>
    <div class="m-homepage">
        <div class="m-homepage__content1">
            <img src="/HomepageItem.svg" alt="Item de la page d'acceuil">            
            <p>Le concept de ce site ? Participer à un jeu de culture générale où la participation sera de mise afin de proposer vos questions et réponses, auxquels les autres joueurs auront la joie d'y répondre. Chaque jour, portera sur des thèmes aléatoires du monde de la culture générale mais saurait vous assez forts pour y répondre ?</p>        
        </div>        
    </div>
    <h2>Les nouveautés :</h2>
    <div class="m-homepage2">
        <div class="m-homepage2__content2">
            <p> Le calendrier disponible : <br>
                L'an 2024 <br>
                Prochainement : <br>
                    L'an 2025 <br>
                    L'an 2026 </p>                
            <img src="/chad-george-QWeOB-JiHoQ-unsplash.jpg" alt="homepage photo 2">
        </div>
    </div>
    <h2>Les fonctions et éléments du site ?</h2>
    <div class="m-homepageGage">
        <div class="m-homepageGage__gage1">
            <img src="/calendar.svg" alt="calendrier de gage de qualité">
            <h3>Les calendriers</h3>
            <p>Le coeur du projet, structure du site, décomposé par semaine, qui sont décomposées par mois et puis par année. C'est en somme l'interface du jeu sur ce site, dont tout sera interactif.</p>
        </div>
        <div class="m-homepageGage__gage2">
            <img src="/people.svg" alt="gens de gage de qualité">
            <h3>Les joueurs</h3>
            <p>Les joueurs auront pour fonctions sur le site, de créer des questions, de les soumettre à la modération du site suivant la CGU et d'y répondre également, sauf à ses propres questions dans quel cas une autre question sera aléatoirement choisi pour la personne.</p>
        </div>
        <div class="m-homepageGage__gage3">
            <img src="/knowledge.svg" alt="calendrier de gage de qualité">
            <h3>La culture générale</h3>
            <p>Les connaissances de chacun, qui seront la ressource du jeu, qui seront patagées sur le site, conservé dans une base de données bien protégée et dynamique afin de proposer l'expérience utilisateur idéale.</p>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
h2{
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin: 3rem;
}
.m-homepage{
    &__content1{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin: rem(70);
        text-align: center;
        align-items: center;
        img{
            height: rem(600) ;
            margin-left: rem(50) ;
            margin-bottom : rem(50) ;       
        }
        p{
           font-size: 38px; 
        }
    }
}
.m-homepage2{
    &__content2{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin: rem(70);
        text-align: center;
        align-items: center;
        img{
            height: rem(600) ;
            margin-left: rem(50) ;
            margin-bottom : rem(50) ;       
        }
        p{
           font-size: 38px; 
        }
    }
}
.m-homepageGage{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin: 2rem;
    text-align: center;
    align-items: center;
    h3{
        font-weight: 600;
        font-size: 32px;
    }
    p{
        line-height: 2.5rem;
        padding: 1.5rem;
    }
    img{
        height: rem(300);
    } 
}
</style>

<script>
</script>