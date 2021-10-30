<template>
<div id="index">
  <div class="logocontainer">
  <img alt="Vue logo" class="logo" src="./assets/logo.png">
  </div>
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
  font-size: 1.5em;
  border: 2px;
  border-color: red;
  display: block;
  text-align: center;
}
.link{
  /* border: 2px;
  border-collapse: red;
  border-style: dotted; */
  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  margin-right: 5px;
  margin-left: 5px;
  text-decoration: none;
  color: #2192AF;
 
}
.link:hover{
  background: rgb(41, 88, 150);
  width: auto;
  color: rgb(255, 255, 255);
  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 4px;
}
.logocontainer{
  border-radius: 4px;
  background: #1a242e2c;
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
