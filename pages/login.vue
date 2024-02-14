<script setup>
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseClient();
//signIn is depreciated, signInWithPassword is the new function...
const userLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    email.value = '';
    password.value = '';

    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};

watchEffect(() => {
  if (user.value) {
    return navigateTo('/profil');
  }
});
</script>
<template>
    <!-- Email : ludovicfaye89@gmail.com MDP : Prisme -->
    <main>
      <section class="container">
        <form @submit.prevent="userLogin" class="form">
          <h2 class="title">Login</h2>
          <div class="input-group">
            <label for="email" class="label">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="input" required />
          </div>
  
          <div class="input-group">
            <label for="password" class="label">Password</label>
            <input id="password" v-model="password" name="password" type="password" class="input" required />
          </div>
  
          <button class="button">Submit</button>
  
          <span class="error-msg" v-if="errorMsg">{{ errorMsg }}</span>
  
          <p class="mt-3 text-xs">You don't have an account yet?</p>
          <nuxt-link class="link-text" to="/register">Register</nuxt-link>
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
  color: #4B5563; /* text-gray-400 */
}

.form {
  background-color: #242424;
  background-opacity: 50%;
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 2rem;
  @media (min-width: 768px) { /* md */
    margin-top: 0;
    width: 50%;
  }
  @media (min-width: 1024px) { /* lg */
    width: 33.333333%;
  }
}

.title {
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #aac8e4; /* text-[#aac8e4] */
}

.input-group {
  position: relative;
  margin-bottom: 1rem;
}

.label {
  font-size: 0.875rem;
  line-height: 1.75;
  color: #4B5563; /* text-gray-400 */
}

.input {
  background-color: transparent;
  background-opacity: 20%;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #4B5563; /* border-gray-600 */
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  line-height: 2;
  color: #F3F4F6; /* text-gray-100 */
  outline: none;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:focus {
    border-color: #42b883;
    background-color: transparent;
    ring: 2px transparent transparent;
  }
}

.button {
  border-radius: 0.375rem;
  border: 0;
  background-color: #42b883;
  padding: 0.5rem 2rem;
  font-family: 'sans-serif';
  font-weight: bold;
  color: #213547;
  transition: background-color 0.5s;
  &:hover {
    background-color: #42d392;
  }
  &:focus {
    outline: none;
  }
}

.error-msg {
  position: absolute;
  right: 2rem;
  top: 2rem;
  background-color: #242424;
  background-opacity: 50%;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #EF4444; /* text-red-500 */
}

.link-text {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #aac8e4;
  &:hover {
    color: #42b883;
  }
}
</style>

  