<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import GoogleSpeech from "./helpers/googleSpeech.js";
import * as helpers from './helpers/witai';
const { getIntent } = helpers;

export default {
  name: "app",
  components: {
    HelloWorld
  },

  created() {
    const speech = new GoogleSpeech();
    speech.init();
    getIntent('joke')
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
