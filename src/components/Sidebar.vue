<template>
  <div class="bg-green-200">
    <div class="flex justify-center mt-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div id="nav" class="flex flex-col">
      <router-link to="/">Domki</router-link>
      <router-link to="/category">Kategorie domków</router-link>
      <router-link to="/animals">Zwierzęta</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style scoped>

#nav {
  @apply p-10
}

#nav a {
  @apply whitespace-nowrap p-3;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  @apply bg-white rounded;
  color: #42b983;
}
</style>
