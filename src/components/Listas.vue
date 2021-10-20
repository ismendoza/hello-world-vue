<template>
<h3>Listas con v-for</h3>
    <ul>
        
        <li v-for="item in items" :key="item.saludo">
            {{ item.saludo}}
        </li>
    </ul>

    <h3>Listas con index</h3>
    <ul>
        <li v-for="(item, index) in items" :key="item.saludo">
            {{ index }}--{{item.saludo}}
        </li>
    </ul>

    <h3>V-for con un objeto</h3>
    <ul>
        <li v-for="value in objeto" :key="value.objeto">
            {{ value}}
        </li>
    </ul>

    <h3>V-for con un objeto, utilizando el nombre de la propiedad</h3>
    <ul>
        <li v-for="(value, name) in objeto" :key="value.objeto">
         <div class="listaObjeto">{{name}} : <p>{{value}}</p> </div>
        </li>
    </ul>

</template>

<script>
export default {
    name: 'Listas',
    data(){
        return{
            items: [{ saludo: 'Buenos días' }, { saludo: 'Buenas tardes'}, { saludo: 'Buenas noches'}],

            objeto: {
                titulo: "Listas en vuejs",
                autor: "Ismendoza",
                fecha: "octubre 2021",
                
            }
        }
    }
}
</script>

<style scoped>
div{
    color: blue;
}
p{
    color:rgb(134, 6, 96)
};
</style>