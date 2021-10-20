<template>
<div>
    Sumar {{ a }} + {{ b }}
    <button @click="sumar">Sumar</button>
</div>
    

    <div>
    Restar {{ a }} - {{ b }}
        <button @click="restar">Restar</button>
        <p>Resultado {{ restult }}</p>
    </div>
    
</template>

<script>
export default {
    name: "Methods",
    data(){
        return{
            a: 10,
            b: 25,
            restult: 0
        }
    },
    methods:{
        sumar(){
            this.restult = this.a + this.b
        },
        restar(){
            this.restult = this.a - this.b
        }
    }
}
</script>

<style scoped>
button{
    color: steelblue;
    font-size: 20px;
}
p{
    font-size: 25px;
}
</style>