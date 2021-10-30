<template>
<div>
<h2>v-for with array</h2>
    <ul>
        <li v-for="item in saludos" :key="item.saludo">
            {{ item.saludo}}
        </li>
    </ul>

<h2>v-for with an object</h2>
<ul>
    <li v-for="value in objeto" :key="value.objeto">
        {{ value}}
    </li>
</ul>

    <h2>v-for displaying index</h2>
    <ul>
        <li v-for="(item, index) in languages" :key="item.lan">
            {{ index }}. {{item.lan}}
        </li>
    </ul>

<h2>v-for with object, using properties name</h2>

    <ul>
        <li v-for="(value, name) in objeto" :key="value.objeto">
         <div class="listaObjeto">{{name}} : {{value}} </div>
        </li>
    </ul>

<h2>v-for with Range and v-for with v-if</h2>
In a range of 10, display pair numbers
<p v-for="n in 10" :key="n">
    <b v-if="n%2 == 0">
    {{n}}
    </b>    
</p>

</div>
</template>

<script>
export default {
    name: 'Listas',
    data(){
        return{
            saludos: [{ saludo: 'Buenos días' }, { saludo: 'Buenas tardes'}, { saludo: 'Buenas noches'}],

            objeto: {
                titulo: "Rendering lists in vuejs",
                autor: "Ismael M.",
                fecha: "Octubre 2021",
            },
            languages: [
                {lan: 'Java'},
                {lan: 'Python'},
                {lan: 'C++'},
                {lan: 'C#'},
                {lan: 'PHP'},
                {lan: 'Javascript'},
                {lan: 'Ruby'}
                ]
            
        }// fin del return
    } // fin del data
} // fin del export
</script>

<style scoped>
h2{
  color: #3498DB ;
}
p{
  font-size: larger;
  text-align: justify;
  width: 60%;
  color: #383B3D;
}
li{
    color: #1e2c3b;
}
</style>