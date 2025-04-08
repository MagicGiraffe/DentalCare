<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
h1 {
  color: #42b983;
}
</style>
