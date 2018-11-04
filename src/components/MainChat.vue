<template>
  <div class="main-chat-container">
    <mr-smarty-pants :isListening="isListening" :isTalking="isTalking" :message="botResponse"></mr-smarty-pants>
  </div>
</template>

<script>
  import MrSmartyPants from '@/components/MrSmartyPants.vue'

  let recognizer = new webkitSpeechRecognition()
  recognizer.continuous = true
  recognizer.interimResults = false
  recognizer.lang = "en-US"

  export default {
    name: 'MainChat',
    components: {
      MrSmartyPants
    },
    data() {
      return {
        currentState: null,
        isTalking: false,
        isListening: false,
        botResponse: '',
        humanMessage: ''
      }
    },
    methods: {
      listen() {
        recognizer.start()
        recognizer.onresult = (event) => {
          const last = event.results.length - 1
          this.botResponse = 'You said: ' + event.results[last][0].transcript
          console.log('Talking...')
          recognizer.stop()
          this.speak()
        }
        recognizer.onspeachend = (event) => { console.log('On speech end') }
        recognizer.onsoundend = (event) => { console.log('On sound end') }
        recognizer.onnomatch = (event) => { console.log('On no match') }
        recognizer.onend = (event) => { console.log('On end') }
        recognizer.onerror = (event) => {
          console.log('On error')
          console.log(event)
          if (event.error === 'no-speech') {
            recognizer = null
            recognizer = new webkitSpeechRecognition()
            recognizer.continuous = true
            recognizer.interimResults = false
            recognizer.lang = "en-US"
            recognizer.start()
          }
        }
      },
      speak() {
        let msg = new SpeechSynthesisUtterance(this.botResponse)
        window.speechSynthesis.speak(msg)
        msg.onend = event => {
          console.log(
            "Utterance has finished being spoken after " +
              event.elapsedTime +
              " milliseconds."
          )
          msg = null
          this.listen()
        }
      }
    },
    mounted() {
      this.botResponse = 'Hello!'
      this.speak()
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
