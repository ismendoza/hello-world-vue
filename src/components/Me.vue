<template>
    <div class="me">
        <h2>Hello world</h2>
        <div id="tiempo"></div>
        <div class="name"><h3>Ismael Mendoza</h3></div>
        
        <p><a href="https://github.com/ismendoza">Github</a></p>
        <p><a href="https://www.instagram.com/ismendoza14/">Instagram</a></p>
        
    </div>
</template>


<script>
export default {
    name: 'Me',
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

setInterval(function () {
        var tiempo = new Date();
        var hora = tiempo.getHours();
        var minutos = tiempo.getMinutes();
        var segundos = tiempo.getSeconds();

        document.getElementById("tiempo").innerHTML = hora + ':' + minutos + ':' + segundos;
    }, 1000);
</script>

<style scoped>
.me {
    height: 300px;
    border: 2px;
    border-style: groove;
    border-color:cadetblue;
    border-radius: 6px;
   }
h3{
     color: #383B3D;
}

h2{
    vertical-align: middle;
    color: #3498DB;
    text-align: center;
}
a{
    font-size: large;
    text-decoration: none;
    text-align: left;
}
.name{
    position: absolute;
    color:#005F9D ;
    bottom: 0;
    font-size: 1.5em;
}

  #tiempo 
            {
                font-size: 40px;
                text-align: center;
                color: #383B3D;
                
                
                
            }
</style>