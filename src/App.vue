<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HolaMundo mensaje="Bienvenido a vuejs" autor="Ismael Mendoza"/>
  <Contador />
  <Methods />
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import HolaMundo from './components/HolaMundo.vue'
import Contador from './components/Contador.vue'
import Methods from './components/Methods.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, HolaMundo, Contador, Methods
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
