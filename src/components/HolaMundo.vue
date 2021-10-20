<template>
    <div class="mymessages">
        <h1>{{mensaje}} </h1>
        <h2>{{ autor }} </h2>
        <h3>{{ link }} </h3>
    </div>
</template>


<script>
export default {
    name: 'HolaMundo',
    props: {
        mensaje: String,
        autor: String,
    },
    data(){
        return {
            link: 'https://github.com/ismendoza/'
        }
        
    }
}
</script>

<style scoped>
.mymessages {
    color: red;
}
h3{
    color: blue;
}
</style>