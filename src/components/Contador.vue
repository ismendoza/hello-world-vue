<template>
    <button @click="number++"> Click here </button>
    <p>{{ number }}</p>
</template>

<script>
export default {
    name: 'Contador',
    data(){
        return{
            number: 0
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