<template>
  <div id="app">
    <h1 class="app-title">Mr. Smarty Pants</h1>
    <MainChat msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainChat from './components/MainChat.vue'

export default {
  name: 'app',
  components: {
    MainChat
  }
}
</script>

<style>
#app {
  font-family: 'Orbitron', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .app-title {
    color: rgba(255,255,255, 0.8);
    font-weight: 900;
    font-size: 4em;
    text-transform: uppercase;
  }
</style>
