function join (_String){
    let letras
    for (let index = 0; index < _String.length; index++) {
        element = _String[index];
       letras += element+" "
    }
    
    return letras
}
console.log(join("OSMARESELMEJOR"))