<template>
    <div id="app">
      <button @click="toggleSidebar">Menu</button>
      <div class="sidebar" :class="{ active: isSidebarActive }">
        <button @click="toggleSidebar">Fermer</button>
        <!-- Contenu du menu latéral -->
        <div>
          <p>Catégorie: {{ currentCategory }}</p>
          <label for="question">Question</label>
          <input type="text" id="question" v-model="question" placeholder="Entrez votre question">
          <label for="answer">Réponse</label>
          <input type="text" id="answer" v-model="answer" placeholder="Entrez votre réponse">
          <button @click="saveData">Sauvegarder</button>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .sidebar {
    position: fixed;
    left: -250px;
    width: 250px;
    height: calc(100% - 60px); /* Header + Footer height */
    background: lightgrey;
    transition: left 0.3s ease;
    padding: 20px;
  }
  
  .sidebar.active {
    left: 0;
  }
  
  /* Autres styles nécessaires */
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
  