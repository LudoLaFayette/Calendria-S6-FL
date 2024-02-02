<script setup>
// import { useGlobalStore } from '@/stores/global.js';
// const store = useGlobalStore();
// console.log(store);
</script>

<template>
  <header class="c-header">
    <div class="c-header__logo">
      <img src="/logo.svg" alt="Calendria Logo">
    </div>
    <nav class="c-header__menu">
      <ul>
        <li><a href="/">Acceuil</a></li>
        <li><a href="/calendrier">Calendriers</a></li>
        <li><a href="/profil">Profil</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <!-- <div class="c-header__côté-droite">

        <div class="c-header__côté-droite--Search">
          <StylesStyleIcon name="search" background="noneStyle"  />
          <input type="search" placeholder="Rechercher...">
        </div>
        <div class="c-header__côté-droite--count" >
                      
        </div>            
    </div> -->
    

  </header>

</template>

<style lang="scss" scoped>
.c-header {
      align-items: center;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;  
      padding: rem(20) rem(50);  
      

        &__logo{
          img {
            height: rem(100);
            width: auto;
        }
        } 


      &__menu {
       
          ul {
              display: flex;
              font-size: $normal_font_size;  
              font-weight: 600;
              gap: rem(30);              
              list-style-type: none;
              margin: 0;           
              padding: 0;            
              
              li {
                  a {
                      color: #007BFF;
                      text-decoration: none;
                      border: 0.25rem solid #007BFF; 
                      padding: 1rem; 
                                          
                      &:hover {
                          text-decoration: underline;
                          
                      }
                  }
              }
          }
      }

        &__côté-droite {
            display: flex;
            align-items: center;
            gap: rem(10);  
            border-radius: rem(10);
            box-shadow: 0px rem(2) rem(10) rgba(0, 0, 0, 0.20);
            padding: rem(5);
            
            
            input[type="search"] {
                border: none;
                outline: none;
            }
            &--Search{
                align-items: center;
                background-color: white;             
                border-radius: rem(15);
                display: flex;

            }  

              &--count{
              background-color: $primary-color;
              box-shadow: (0px 0px 22px rgba(204, 0, 0, 0.80));
              border-radius: rem(50);
              font-size: rem(12);
              translate: rem(65) rem(-5);
              color: white;
              

            }
            
            &--border{         
            border-left: 1px solid $grey;
            border-radius: 0px 10px 10px 0px;
                
            }
            
            }
        }
  
</style>