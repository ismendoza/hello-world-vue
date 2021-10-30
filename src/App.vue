<template>
<div id="index">
  <img alt="Vue logo" class="logo" src="./assets/logo.png">
  <div id="mynavigationbar">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/refmethod" class="link">Ref method</router-link>
    <router-link to="/reactivemethod" class="link">Reactive method</router-link>
    <router-link to="/computedmethod" class="link">Computed method</router-link>
    <router-link to="/lists" class="link">v-for</router-link>
    <router-link to="/references" class="link">References</router-link>
  </div>
  <Me id="me" />
  
  <router-view id="view" />
</div>
  
</template>


<script>
import Me from './components/Me.vue'
export default {
  name: 'App',
  components: {
    Me
    
  }
}
</script>

<style scoped>

#mynavigationbar{
  font-size: 20px;
  border: 2px;
  border-color: red;
  display: block;
  text-align: center;
}
.link{
  margin-right: 15px;
  text-decoration: none;
  color: #2192AF;

}
.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#me{
  position: absolute;
  width: 18%;
  border: 2px;
  margin-top: 30px;
  
  padding-left: 20px;
  margin-right: 20px;
  background: #fdffa3;
}

 #view{
  position: absolute;
  border: 2px;
  left: 20%;
  right: 0;
  margin-top: 30px;
  margin-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  min-height: 60%;
  background: #fdffa3;

} 
</style>
