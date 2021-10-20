<template>
    <div id="v-model-basic" class="myform">
        <h3>Form input v-model</h3>
        <input v-model="message" placeholder="edit me">
        <p>I say: {{ message }}</p>
        
        <h3>Form checkbox </h3>
        <input type="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    data(){
        return{
            message: '',
            checked: false
        }
    }
}
</script>

<style scoped>
    .myform{
        border: 1px solid rgb(204, 195, 195);
        border-radius: 2px;
    }

    h3{
        color: green;
    }
</style>
