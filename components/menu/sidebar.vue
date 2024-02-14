<template>
    <div id="app">
        <div class="button-holder">
            <button @click="toggleSidebar" class="button1">Participer</button>
        </div>      
      <div class="sidebar" :class="{ active: isSidebarActive }">
        <button @click="toggleSidebar" class="button2">Fermer</button>
        <!-- Contenu du menu latéral -->
        <MenuSidebarContent/>
      </div>
    </div>
  </template>
  <style scoped lang="scss">
  .button-holder{
    display: flex;
    justify-content: center;
    .button1{
            display: grid;
            height: 100px;
            width: 300px;
            border-radius: 1.5rem;
            font-size: 45px;
            margin-bottom: 5rem;
            background-color: #007BFF;
            border: #007BFF 0.15rem solid;
            color: white;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;

            &:hover{
            background-color: white;
            color: #007BFF;
            border: #007BFF 0.15rem solid;         
                
            }
            
        }
  }
 
  .sidebar {
  position: fixed;
  top: 0; /* Aligné au haut de la page */
  left: -370px; /* Démarre hors de l'écran */
  width: 320px; /* Largeur du menu */
  height: 100vh; /* Hauteur totale de la vue */
  background: #007BFF;
  color: white;
  transition: left 0.3s ease;
  padding: 5px 20px 5px 20px;   
  z-index: 1000; /* S'assure que le menu est au-dessus des autres éléments */
}

  .sidebar.active {
    left: 0;
    overflow-y : auto;
    .button2{
           
            height: 40px;
            width: 70px;
            background-color: #007BFF;
            border-radius: 1.5rem;
            font-size: 14px;
            // margin-bottom: 5rem;
            color: white;
            border: white 0.15rem solid;
            position: absolute;
            top: 17.5px;
            right: 15px; /* Positionne le bouton de fermeture en haut à droite */
            padding: 10px 10px;
            text-align: center;
            cursor: pointer;
            &:hover{
                background-color: white;
                color: #007BFF;
                border: white 0.15rem solid;                                
            }
            
        }
 }
  
  </style>
<script>
export default {
  data() {
    return {
      isSidebarActive: false,
      question: '',
      answer: '',
      currentCategory: 'Catégorie Exemple',
      
    };
  },
  
  methods: {
    
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    saveData() {
      // Logique pour sauvegarder les données via Supabase
      console.log('Sauvegarder', this.question, this.answer);
      // Vous devrez utiliser Supabase client ici pour interagir avec votre base de données
    },
  },
};
</script>
<!-- <script setup lang="ts">
const client = useSupabaseClient()

const { data: categories } = await useAsyncData('categories', async () => {
  const { data } = await client.from('categories').select('id_categorie, nom_categorie').eq('1', 'Pays').single()

  return data
})
console.localStorage(data)
</script> -->
  