<script setup>
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const userLogout = async () => {
  await auth.signOut();
};

watchEffect(() => {
  if (!user.value) {
    return navigateTo('/login');
  }
});

definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <main class="main">
    <section v-if="user" class="section">
      <div class="div">
        <figure class="figure">
          <img
            class="img"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt=""
          />
        </figure>
        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="tagline">Welcome</h1>
          <div class="divider"></div>

          <h3 class="email-title">Email</h3>
          <p class="email">{{ user.email }}</p>

          <button
            @click="userLogout"
            class="logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped lang="scss">
.main {
  color: #4B5563; /* text-gray-400 */
}

.section {
  margin-top: 2.5rem; /* mt-10 */
  display: flex;
  justify-content: center;
}

.div {
  text-align: center;
}

.figure {
  display: inline-flex;
  height: 5rem; /* h-20 */
  width: 5rem; /* w-20 */
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  background-color: #1F2937; /* bg-gray-800 */
  color: #4B5563; /* text-gray-600 */
}

.img {
  border-radius: 9999px; /* rounded-full */
}

.tagline {
  margin-top: 1rem; /* mt-4 */
  font-size: 3rem; /* text-5xl */
  font-weight: 800; /* font-black */
}

.divider {
  margin-top: 0.5rem; /* mt-2 */
  margin-bottom: 1rem; /* mb-4 */
  height: 0.25rem; /* h-1 */
  width: 3rem; /* w-12 */
  border-radius: 9999px; /* rounded */
  background-color: #42b883;
}

.email-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  color: #aac8e4;
}

.email {
  font-size: 1rem; /* text-base */
  color: #4B5563; /* text-gray-400 */
}

.logout-button {
  margin-top: 2rem; /* mt-8 */
  border-radius: 0.375rem; /* rounded-md */
  background-color: #42b883;
  padding: 0.5rem 1rem; /* px-4 py-2 */
  font-family: 'sans-serif';
  font-weight: 700; /* font-bold */
  color: #213547;
  transition: background-color 0.5s; /* duration-500 */

  &:hover {
    background-color: #42d392;
  }

  &:focus {
    outline: none;
  }
}
</style>
