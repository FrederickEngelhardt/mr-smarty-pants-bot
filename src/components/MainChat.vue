<template>
  <div class="main-chat-container">
    <mr-smarty-pants></mr-smarty-pants>
  </div>
</template>

<script>
  import MrSmartyPants from '@/components/MrSmartyPants.vue'

  export default {
  name: 'MainChat',
    components: {
      MrSmartyPants
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
