// escribe la función sum acá
function sum(num){
    let element=0
   for (let index = 0; index < num.length; index++) {
     element += num[index];
    
   } 
   return element
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0