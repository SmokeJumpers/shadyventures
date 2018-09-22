<template>
  <div id="app">
    <header>
      <img src="https://pre00.deviantart.net/856e/th/pre/f/2012/263/3/e/3ececa154d5e33543bac7947aba5dad6-d5fc6os.jpg" alt="Handshake with the Devil Banner">
      <h1>Shady Ventures</h1>
    </header>
    <button @click="handleSubmit">Generate Your Shady Busniess Idea</button>
  </div>
</template>

<script>
import api from './services/api.js';

export default {
  methods: {
    handleSubmit() {
      api.getPitch();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
