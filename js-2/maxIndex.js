// escribe la función maxIndex acá


function maxIndex(numeros){
    if (numeros.length==0){
        return -1
    }
    let bandera = numeros[0];
    let indiceMayor =0;
    for (let index = 0; index < numeros.length; index++) 
    {
        element = numeros[index];
        if(bandera < element) 
        {
            bandera=element
            if(bandera >= element)indiceMayor=index  
        }
    }

    return indiceMayor
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1