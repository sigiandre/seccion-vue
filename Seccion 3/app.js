Vue.component('mi-primer-componente', {
    props:['msg'],
    template: '<div class="alert alert-success" role="alert"><button class="btn btn-primary" v-on:click="Saludar(msg)">Click</button>{{msg}}</div>',
    methods:{
        Saludar: function(){
            alert("Hola " + this.msg);
        }
    }
})

var app = new Vue({
    el: "#app",
    data:{

    }
})