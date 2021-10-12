<template>
  <div id="app" class="flex flex-row">
    <div id="nav" class="flex flex-col">
      <router-link to="/">Home List</router-link>
      <router-link to="/category">Add Category</router-link>
      <router-link to="/home">Add home</router-link>
    </div>
    <div class="p-10 w-full">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  @apply my-2 whitespace-nowrap;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
