<template>


<h1>Reactividad con el metodo reactive</h1>
<button @click="crearContacto()">Crear contactos</button>
<ul>
    <li v-for="c in contacts.numeros" :key="c.numeo">
        {{c.numero}}
    </li>
</ul>




</template>

<script>
import { reactive, toRefs, isReactive } from '@vue/reactivity'

export default {

    setup() {
     
        const contacts = reactive({
            numeros: [{'numero': 111}]
        })

        console.log("Objeto de inicio ", contacts)
        console.log('contacts es reactivo?', isReactive(contacts)) 

        // Cuando presiona el botón crear contactos ejecuta esta función
        function  crearContacto() {
                contacts.numeros.unshift({'numero':5911}, {'numero':2338});
                console.log(contacts);
        } // Fin del crear contacto   
        
        return{  ...toRefs(contacts), crearContacto, contacts }
        
        
    }, // Fin del setup 

} // Fin del export
</script>