<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HolaMundo mensaje="Bienvenido a vuejs" autor="Ismael Mendoza"/>
  <Contador />
  <Methods />
  <FormInput />
  <Listas />
  <Reactive />
  <ReactiveArray />
  <ReactiveInput />
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import HolaMundo from './components/HolaMundo.vue'
import Contador from './components/Contador.vue'
import Methods from './components/Methods.vue'
import FormInput from './components/FormInput.vue'
import Listas from './components/Listas.vue'
import Reactive from './components/Reactive.vue'
import ReactiveArray from './components/ReactiveArray.vue'
import ReactiveInput from './components/ReactiveInput.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, HolaMundo, Contador, Methods,
    FormInput, Listas, Reactive, ReactiveArray, ReactiveInput
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
