import * as helpers from './witai';

class GoogleSpeech {
  constructor(setter) {
    this.recognition = new webkitSpeechRecognition();
    this.setter = setter;
    this.output = 'this is default text';
  }
  init() {
    this.listen();
    return this.output;
  }
  speak = string => {
    let msg = new SpeechSynthesisUtterance(string);
    this.recognition.stop();
    window.speechSynthesis.speak(msg);
    msg.onend = event => {
      console.log(
        "Utterance has finished being spoken after " +
          event.elapsedTime +
          " milliseconds."
      );
      msg = null;
      this.recognition.start();
    };
  };
  listen() {
    const { speak } = this;
    let final_transcript = "";
    const { recognition } = this;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = event => {
      let interim_transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript = event.results[i][0].transcript;
          console.log(final_transcript);
          this.setter(final_transcript);
          speak(final_transcript);
        } else {
          console.log(interim_transcript);
          interim_transcript += event.results[i][0].transcript;
        }
      }
    };
  }
}

export default GoogleSpeech;
