<template>
  <div id="app" class="flex flex-row h-full">
    <sidebar/>
    <div class="p-10 w-full">
      <router-view/>
    </div>
  </div>
</template>


<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {Sidebar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {

}

</style>
