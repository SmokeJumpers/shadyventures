<template>
  <div id="app">
    <header>
      <img class="banner" src="https://pre00.deviantart.net/856e/th/pre/f/2012/263/3/e/3ececa154d5e33543bac7947aba5dad6-d5fc6os.jpg" alt="Handshake with the Devil Banner">
      <h1>Shady Ventures</h1>
    </header>
    <button @click="handleSubmit">Generate Your Shady Busniess Idea</button>
    <h2 v-if="pitch">Your website is: {{ pitch.url }}</h2>
    <h3 v-if="pitch"> Your pitch is: {{ pitch.pitch }}</h3>
  </div>
</template>

<script>
import api from './services/api.js';

export default {
  data() {
    return {
      pitch: null
    };
  },
  methods: {
    handleSubmit() {
      this.pitch = api.getPitch();
    }
  }
}
</script>

<style>
  header {
    width: 100vw;
  }

  header img {
    width: 100%;
  }

  h2 {
    margin-top: 30px;
  }

  h3 {
    margin-bottom: 50px;
  }
</style>
