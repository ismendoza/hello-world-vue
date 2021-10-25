<template>


<h1>Reactividad con el metodo reactive y un input</h1>
<label for="">Usuario</label>
<input type="text" v-model="nombre">
<label for="">Teléfono</label>
<input type="text" v-model="telefono">
<button @click="agregarUsuario()">Agregar</button>
<h4>Lista de usuarios</h4>

<ul>
    <li v-for="c in contactos.numeros" :key="c">
     <b>Nombre:</b> {{c.nombre}}, <b>Teléfono:</b> {{c.telefono}}
    </li>
</ul>

</template>

<script>
import { reactive, toRefs, isReactive } from '@vue/reactivity'

export default {

    setup() {
     
        const contactos = reactive({
            nombre: '',
            telefono: '',
            numeros: [{'nombre': 'ismael', 'telefono': '22334455'}]
        })

        console.log("Objeto de inicio ", contactos)
        console.log('contactos es reactivo?', isReactive(contactos)) 
        
        // Cuando presiona el botón crear contactos ejecuta esta función
        function  agregarUsuario() {
                contactos.numeros.push({'nombre': contactos.nombre, 'telefono': contactos.telefono });
                console.log(contactos);
        } // Fin del crear contacto   
        
        return{  ...toRefs(contactos), agregarUsuario, contactos }
        
        
    }, // Fin del setup 

} // Fin del export
</script>