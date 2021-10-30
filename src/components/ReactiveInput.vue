<template>
<div id="ReactiveInputs">

<h1>Reactivity using reactive method</h1>
<p>The app starts with data in a reactive object 'contacts', with reactive() 
    I can add data to the object and see the new data in the page automatically, 
    I use toRefs to convert the reactive object to a plain object, then I use its properties in v-model</p>
<div>
    <label for="">Name</label>
    <input type="text" v-model="nombre">
</div>
<div>
    <label for="">Phone number</label>
    <input type="number" v-model.number="telefono">
</div>
<div id="control">
    <button @click="agregarUsuario()">Add</button>
</div>
<h4>List of contacts</h4>

<ul>
    <li v-for="c in contactos.numeros" :key="c">
     <b>Name:</b> {{c.nombre}}, <b>Phone number:</b> {{c.telefono}}
    </li>
</ul>

</div>
</template>

<script>
import { reactive, toRefs, isReactive, isRef } from '@vue/reactivity'

export default {

    setup() {
     
        const contactos = reactive({
            nombre: '',
            telefono: '',
            numeros: [{'nombre': 'ismael', 'telefono': '22334455'}]
        })

        console.log("Objeto de inicio ", contactos)
        console.log('contactos is reactive?', isReactive(contactos)) 
        const stateAsRef = toRefs(contactos)
        console.log("stateAsRef is reactive?", isReactive(stateAsRef))
        console.log("stateAsRef.numeros is ref?", isRef(stateAsRef.numeros))
        
        // Cuando presiona el botón crear contactos ejecuta esta función
        function  agregarUsuario() {
                contactos.numeros.push({'nombre': contactos.nombre, 'telefono': contactos.telefono });
                
                console.log(contactos);
        } // Fin del crear contacto   

        
        /* 
        Con ...toRefs las propiedades del objeto reactivo se convierten
        a un objeto normal, y al v-model se puede asignar estas propiedades
        que ya no son reactivas, asi: v-model="nombre"
        pero para la lista si se utiliza el objeto reactivo llamado contactos,
        por eso en el v-for se utiliza contactos.
        */
        return{  ...toRefs(contactos), agregarUsuario, contactos }
        
        /* La propiedad que se asigna al v-model se accede a traves del
        objeto reactivo y no un objeto normal, para este caso en el return
        solo se agrega el objeto reactivo llamado contactos asi:
        v-model="contactos.nombre" 
        por eso el return de abajo no se utiliza ...toRefs
        */
        //return{ agregarUsuario, contactos }
        
        
        
        
    }, // Fin del setup 

} // Fin del export
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
label{
    display: inline-block;
    font-size: large;
    width: 160px;
    text-align: right;
    padding-right: 25px;
    padding-bottom: 20px;
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
#control{
    width: 300px;
    text-align: right;
}
</style>