<template>
  <div class="main-chat-container">
    <mr-smarty-pants :isListening="isListening" :isTalking="isTalking"></mr-smarty-pants>
  </div>
</template>

<script>
  import MrSmartyPants from '@/components/MrSmartyPants.vue'

  export default {
    name: 'MainChat',
    components: {
      MrSmartyPants
    },
    data() {
      return {
        currentState: null,
        isTalking: false,
        isListening: false
      }
    },
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-chat-container {
    margin-top: 50px;
  }
</style>
