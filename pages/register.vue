<script setup>
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');

const { auth } = useSupabaseClient();
const userRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Passwords do not match!';
    password.value = '';
    confirmPassword.value = '';
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
    return;
  }

  try {
    const { error } = await auth.signUp({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};

watch(user, (newValue, oldValue) => {
  if (newValue) {
    navigateTo('/profil');
  }
}, { immediate: true });
</script>
<template>
    <main>
      <section class="container">
        <form @submit.prevent="userRegister" class="form">
          <h2 class="title">S'inscrire</h2>
  
          <div class="input-group">
            <label for="email" class="label">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="input" required />
          </div>
          <div class="input-group">
            <label for="password" class="label">Mot de passe</label>
            <input v-model="password" type="password" id="password" name="password" class="input" required />
          </div>
          <div class="input-group">
            <label for="confirmPassword" class="label">Confirmation du mot de passe</label>
            <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" class="input" required />
          </div>
          <button type="submit" class="button">S'inscrire</button>
          <span class="error-msg" v-if="errorMsg">{{ errorMsg }}</span>
          <p>Déjà inscrit ?</p>
          <nuxt-link class="link-text" to="/login">Se connecter</nuxt-link>
        </form>
      </section>
    </main>
  </template>

  <style scoped lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 6rem 1.25rem;
    color: white; // text-gray-400
  }
  
  .form {
    background-color: #007BFF; // bg-[#242424] with opacity
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 2rem;
    @media (min-width: 768px) { // md
      margin-top: 0;
      width: 50%;
    }
    @media (min-width: 1024px) { // lg
      width: 33.333333%;
    }
  }
  
  .title {
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
    font-weight: 500;
    color: white; // text-[#aac8e4]
  }
  
  .input-group {
    position: relative;
    margin-bottom: 1rem;
  }
  
  .label {
    font-size: 0.875rem;
    line-height: 1.75;
    color: white; // text-gray-400
  }
  
  .input {
    background-color: white;
    background-opacity: 20%;
    width: 90%;
    border-radius: 0.375rem;
    border: 1px solid #007BFF; // border-gray-600
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 2;
    color: #F3F4F6; // text-gray-100
    outline: none;
    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    &:focus {
      border-color: black;
      ring: 2px transparent transparent;
    }
  }
  
  .button {
    border-radius: 0.375rem;
    background-color: #007BFF;
    padding: 0.5rem 2rem;
    // font-family: 'sans-serif';
    // font-weight: bold;
    color: white;
    transition: background-color 0.5s;
    width: 96%;
    border: 0.15rem solid white;
    margin-top: 0.7rem;
    font-size: 24px;
    &:hover {
      background-color: white;
      color: #007BFF;
      
    }
    &:focus {
      outline: none;
    }
  }
  
  .error-msg {
    position: absolute;
    right: 2rem;
    top: 2rem;
    background-color: rgba(36, 36, 36, 0.5); // bg-[#242424] with opacity
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: #EF4444; // text-red-500
  }
  
  .link-text {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: white;
    text-decoration: underline;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  p{
    margin-top: 1rem;
    font-size: 26px;
  }
  </style>
  