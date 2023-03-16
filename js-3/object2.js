var persona ={
    nombre:"Osmar",
    edad :27,
    ciudad:"Mexico" ,
    profecion:"Comerciante",

    
}
 function presentacion (persona){
    let _String = ""
    var llaves = Object.keys(persona);
    for (var i=0; i < llaves.length; i++) 
    {
        var llave = llaves[i];
       _String += llave+" : "+persona[llave]+" "
    }
     return _String
    }

    let mensaje = presentacion(persona)

    console.log(mensaje)

    persona.hobies=["Caminar con mi perro ","Desarollar proyectos ","Jugar video juegos"]

    console.log(persona.hobies)

    for (let index = 0; index < persona.hobies.length; index++) {
        const element = persona.hobies[index];
        console.log(element)
    }