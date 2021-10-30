<template>
    <div>
        <h1>Reactivity using computed method</h1>
        
        <h5>Product 1: {{price1}} <button @click="increment1">Increase by 1</button></h5>
        <h5>Product 2: {{price2}} <button @click="increment2">Increase by 1</button></h5>
        <h3>Total: {{price1}}+{{price2}} =  {{ total }}</h3>

    </div>
</template>
<script>
export default {
    name: 'Computed',
    data(){
        return {
            price1: 50,
            price2: 40
        }
    },
    computed: {
        total(){
            return this.price1 + this.price2
        }
    },
    methods: {
        increment1(){
            this.price1++
        },
        increment2(){
            this.price2++
        }
    }

}
</script>
<style scoped>
h1{
  color: #3498DB ;
}
p{
  font-size: larger;
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
