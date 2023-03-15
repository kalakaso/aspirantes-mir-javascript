// escribe la función max acá
function max(numeros){
    
    let bandera = numeros[0];
    for (let index = 0; index < numeros.length; index++) {
        element = numeros[index];
        if(bandera < element) bandera=element
    }
    
    return bandera
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined