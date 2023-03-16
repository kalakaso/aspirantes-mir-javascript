var pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],

    saluda:function(){
       return console.log("Hola me llamo "+this.nombre);
    }
}

console.log(pedro.edad)
pedro.estatura =1.8
delete pedro.activo;

var llaves = Object.keys(pedro);
for (var i=0; i < llaves.length; i++) {
  var llave = llaves[i];
  console.log(llave+":"+pedro[llave]);
}

pedro.saluda()