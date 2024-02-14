<template>
    <div class="container">      
      <div class="form-section">
        <h2>Question</h2>
       <div class="input-group">
          <label for="titre-question">Titre de la Question</label>
          <input type="text" id="titre-question" v-model="titreQuestion" placeholder="Entrez le titre de la question">
        </div>
        <div class="input-group">
          <label for="corps-question">Corps de la Question</label>
          <textarea id="corps-question" v-model="corpsQuestion" placeholder="Entrez le corps de la question"></textarea>
        </div>
        <div class="input-group">
          <label for="categorie">Catégorie</label>
          <select id="categorie" v-model="selectedCategorie">
            <option v-for="categorie in categories" :value="categorie.id_categorie" :key="categorie.id_categorie">
              {{ categorie.nom_categorie }}
            </option>
          </select>
        </div>
        <button @click="createQuestion" class="button-action">Créer</button>
        <!-- <button @click="updateQuestion" :disabled="!selectedQuestion" class="button-action">Modifier</button>
        <button @click="deleteQuestion" :disabled="!selectedQuestion" class="button-action">Supprimer</button> -->
      </div>
      <!-- <button @click="selectRandomCategory" class="button-change">Changer de catégorie</button> -->
      
      <div class="form-section">
        <h2>Réponse</h2>
        <div class="input-group">
  <label for="question">Question à associer</label>
  <select id="question" v-model="selectedQuestion">
    <option v-for="question in questions" :value="question" :key="question.id_question">
      {{ question.titre_question }} - {{ question.corps_question }}
    </option>
  </select>
</div>
        <div class="input-group">
          <label for="reponse">Corps de la Réponse</label>
          <textarea id="reponse" v-model="reponseText" placeholder="Entrez votre réponse"></textarea>
        </div>
        <button @click="createReponse" class="button-action">Créer</button>
        <!-- <button @click="updateReponse" :disabled="!selectedReponse" class="button-action">Modifier</button>
        <button @click="deleteReponse" :disabled="!selectedReponse" class="button-action">Supprimer</button> -->
      </div>
    </div>
  </template>
<style scoped lang="scss">
.sidebar > div {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre les éléments horizontalement */
  justify-content: center; /* Centre les éléments verticalement dans leur conteneur */
  height: 100%; /* Utilise toute la hauteur disponible */
  gap: 30px; /* Espacement entre les éléments */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width:85%;
  max-width: 100%; /* Ajustez la largeur maximale selon vos besoins */
  margin: 15px auto;
  margin-top : 5rem;
  margin-bottom : 3rem;
  h2{
    font-weight:600;
    font-size: 32px;
    text-decoration : underline;
    margin-bottom : 0.5rem;
  }
}
@media (max-width: 768px) {
    .form-section, .input-group, .button-action, .button-change {
    width: 100%;
  }

  .input-group input[type="text"], 
  .input-group textarea, 
  .input-group select {
    width: 90%; 
  }
}
@media (max-width: 480px) { 
  .input-group {
    margin: 15px 0;
  }

  .button-action, .button-change {
    font-size: 14px; 
    padding: 8px 16px;
  }
}
.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 12px 0;

  label {
    margin-bottom: 5px;
    font-size : 20px;
    font-weight: 600;
  }
  textarea{
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  input[type="text"]{
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  select {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}

.button-action, .button-change {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 1.5rem;
  font-size: 24px;
  color: white;
  background-color: #007BFF;
  border: none;
  cursor: pointer;
  border: white 0.15rem solid;
  &:hover {
    background-color: white;
    color: #007BFF;
    border: #007BFF 1px solid;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
}

  .sidebar.active {
    left: 0;

    input[type="text"] {
  width: 80%; 
  padding: 10px;  
  border-radius: 5px; 
  border: 1px solid #ccc; 
}
    label {
  text-align: center;
  width: 100%;
}
    
        .button3{
            height: 50px;
            width: 190px;
            background-color: #007BFF;
            border-radius: 1.5rem;
            font-size: 24px;
            margin-bottom: 5rem;
            color: white;
            border: white 0.15rem solid;
            padding: 10px 20px;
            margin-top: 1.5rem;
            cursor: pointer;
            &:hover{
                background-color: white;
                color: #007BFF;
                border: white 0.15rem solid;                                
            }
            
        }
  }
  
  </style>
<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import { onMounted, ref } from 'vue'
const supabaseUrl = "https://oyhcimolotplccxekvkw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95aGNpbW9sb3RwbGNjeGVrdmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMDkyMTIsImV4cCI6MjAyMjc4NTIxMn0.eOKL7J7CodEehbL03qsfYI67O94EzTwI9rA9_2yPUsc"

const supabase = createClient(supabaseUrl, supabaseKey)

const categories = ref([])

// Function to load categories from Supabase
async function loadCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
  
  if (error) {
    console.error('Error loading categories', error)
  } else {
    categories.value = data
  }
}
console.log(categories)
const questions = ref([]);
async function loadQuestions() {
  const { data, error } = await supabase
    .from('questions')
    .select('*'); // Sélectionnez les colonnes spécifiques si nécessaire

  if (error) {
    console.error('Erreur lors du chargement des questions', error);
  } else {
    questions.value = data;
    console.log('Questions chargées', data);
  }
}
// Random category selection function
// const selectedCategory = ref(null)
const selectedQuestion = ref(null) // Supposons que cela vient de votre logique de sélection de question
const reponseText = ref('')
const selectedReponse = ref(null)
const titreQuestion = ref('')
const corpsQuestion = ref('')
const selectedCategorie = ref(null)

// function selectRandomCategory() {
//   if (categories.value.length > 0) {
//     const randomIndex = Math.floor(Math.random() * categories.value.length)
//     selectedCategory.value = categories.value[randomIndex]
//   }
// }
async function createQuestion() {
  const { data, error } = await supabase
    .from('questions')
    .insert([
      { titre_question: titreQuestion.value, corps_question: corpsQuestion.value, categorie_id: selectedCategorie.value }
    ])
  if (error) console.error('Erreur lors de la création', error)
  else console.log('Question créée', data)
}

// async function updateQuestion() {
//   if (!selectedQuestion.value) return
//   const { data, error } = await supabase
//     .from('questions')
//     .update({
//       titre_question: titreQuestion.value, 
//       corps_question: corpsQuestion.value, 
//       categorie_id: selectedCategorie.value
//     })
//     .match({ id_question: selectedQuestion.value.id })
//   if (error) console.error('Erreur lors de la mise à jour', error)
//   else console.log('Question mise à jour', data)
// }

// async function deleteQuestion() {
//   if (!selectedQuestion.value) return
//   const { data, error } = await supabase
//     .from('questions')
//     .delete()
//     .match({ id: selectedQuestion.value })
//   if (error) console.error('Erreur lors de la suppression', error)
//   else console.log('Question supprimée', data)
// }
async function createReponse() {
  const { data, error } = await supabase
    .from('reponses')
    .insert([
      { corps_reponse: reponseText.value, question_id: selectedQuestion.value.id_question}
    ])
  if (error) console.error(error)
  else console.log('Réponse créée', data)
  reponseText.value = '' // Réinitialiser le texte après création
}

// async function updateReponse() {
//   if (!selectedReponse.value) return
//   const { data, error } = await supabase
//     .from('reponses')
//     .update({ corps_reponse: reponseText.value })
//     .match({ id: selectedReponse.value.id })
//   if (error) console.error(error)
//   else console.log('Réponse mise à jour', data)
// }

// async function deleteReponse() {
//   if (!selectedReponse.value) return
//   const { data, error } = await supabase
//     .from('reponses')
//     .delete()
//     .match({ id: selectedReponse.value.id })
//   if (error) console.error(error)
//   else console.log('Réponse supprimée', data)
//   reponseText.value = '' // Réinitialiser le texte après suppression
// }

// Load categories and select a random one on component mount
onMounted(() => {
//   loadCategories().then(selectRandomCategory)
  loadCategories();
  loadQuestions();
})
</script>

