<template>
    <div>
        <h1>Reactivity using ref method</h1>
        <p>The simple way to try ref is creating a counter, a ref use inside setup method</p>

        <button @click="increase">Increase</button>
        <p>Increase counter is reactive using ref()</p>
        <h3>{{ counter }}</h3>
        <!----------------------------------------------------->
        <button @click="decrease">Decrease</button>
        <p>Decrease is not using ref(), you can't see the change when you click on Decrease,
            but if you check out the console the value is changing.
        </p>
        <h3>{{ newcounter }}</h3>
    </div>
</template>
<script>
import { ref, isReactive } from '@vue/reactivity';
export default {

    
    setup() {
        
        const counter = ref(0)
        //Check if counter is reactive after ref()
        console.log('Is counter reactive? ',isReactive(counter) )
        const increase = () =>{
            counter.value++;
        }

        // No se utiliza ref, de forma manual no puede ser reactivo
        let newcounter = 0
        const decrease = () =>{
            newcounter--;
            console.log('value of newcounter is: ', newcounter)
        }
        
        
        
        return { counter, increase, newcounter, decrease}
        
    }

    
}
</script>
<style scoped>
h1{
  color: #3498DB ;
}
p{
  font-size: larger;
  text-align: justify;
  width: 60%;
  color: #383B3D;
}
button{
    background: #7FC649;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    border-color: #7FC649;
    font-size: large;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>