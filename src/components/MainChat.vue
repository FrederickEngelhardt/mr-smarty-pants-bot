<template>
  <div class="main-chat-container">
    <mr-smarty-pants :isListening="isListening" :isTalking="isTalking" :message="botResponse"></mr-smarty-pants>
    <div @click="make()">
      Click me
    </div>
  </div>
</template>

<script>
import MrSmartyPants from "@/components/MrSmartyPants.vue";
import GoogleSpeech from "../helpers/googleSpeech";

export default {
  name: "MainChat",
  components: {
    MrSmartyPants
  },
  data() {
    return {
      currentState: null,
      isTalking: false,
      isListening: false,
      botResponse: "hello123123",
      humanMessage: "This is text"
    };
  },
  methods: {
    createGoogleSpeech() {
      let speech = new GoogleSpeech(this.setterObject);
      speech.init();
      console.log(speech.output);
    },
    setterObject(val){
        this.botResponse = val;
    }
  },
  mounted() {
    this.botResponse = "Hello!";
  },
  created() {
      this.createGoogleSpeech()
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-chat-container {
  margin-top: 50px;
}
</style>
