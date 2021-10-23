<template>
<h3>Reactive ref() vuejs</h3>


<button @click="increaseCount">incrementar</button>
<h3>{{ count }}</h3>

<h3>Reactive</h3>

<p>{{data.message}}</p>

<h3>Computed</h3>

<h5>Producto 1---{{precio1}} <button @click="incrementa1">Subir 1</button></h5> 
<h5>Producto 2---{{precio2}} <button @click="incrementa2">Subir 1</button></h5>
<h4>Total---{{ total }}</h4>
    
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: "Reactive",
    data(){
            return{
                precio1: 50,
                precio2: 40
            }
        },

    computed: {
        total(){
            return this.precio1 + this.precio2;
        }

    },
    //Metodos para el ejemplo computed
    methods:{
        incrementa1(){
            this.precio1++;
        },
        incrementa2(){
            this.precio2++;
        }
    },

    /// Reactive y ref
    setup(){
        // Usando ref
        const count = ref(0)
        const increaseCount = () =>{
            count.value++;
        }
        
        // Usnado reactive
        const data = reactive({
            message: "hello world"
        });
        //Return del setup()
        return {count, increaseCount, data }
        

    },
  

    
    
   
}
</script>

<style scoped>
p{
    font-size: 25;
    color: red;
}
</style>