<template>
    <div  class="c-hero">
            <div class="c-hero__image">
            <img src="/debby-hudson-vb0r4K_J1h8-unsplash.jpg" alt="Image du hero">
            </div>
            <div class="c-hero__right">                
                <p>Bienvenue sur le site de Calendria, le site où vous saurez passer le temps à vous cultiver.</p>
                <div>
                    <button>Se connecter</button> 
                </div>                 
            </div>
    </div>
    
</template>

<style lang="scss">
.c-hero{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    &__image{
        display: grid;
        img{
            height: 100%
        }
        
    }
    &__right{
        display: grid;
        background-color: lightskyblue;
        // grid-template-rows: repeat(2,1fr);
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;

        p{
            font-size: 75px;
            margin: 3rem;
            font-weight: 600;
        }
        button{
            // display: grid;
            height: 100px;
            width: 300px;
            background-color: white;
            border-radius: 1.5rem;
            font-size: 45px;
            margin-bottom: 5rem;
            // justify-content: center;
        }
    }
       
    
}
</style>
<script></script>