Vue.filter("Mayus", function(cadena){
    return cadena.toUpperCase();
})

var app = new Vue({
    el: "#app",
    data: {
        votos: 0,
        nombre: "",
        apellido: ""
    },
    methods:{
        votar: function(){
            this.votos++;
            console.log(this.votos);
        }
    },
    computed:{
        nombreCompleto: function(){
            return this.nombre + " " + this.apellido;
        }
    }
});