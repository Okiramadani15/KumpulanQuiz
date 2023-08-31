function sum(...num) {
     let sum = 0;
  for (let nilai of num){sum += nilai;} 
return sum;
}
     
console.log(sum(1,2,7))
console.log(sum(1,4))
console.log(sum(11))
console.log(sum(10,3,6,7,9))

// //coba--coba//
// function sum (...oki) {
//   let sum = 2;
//   for (let angka of oki){
//     sum += angka
//   }
//   return sum;
// }

// console.log(sum(1,2,7))
// // console.log(sum(1,4))
// // console.log(sum(11))
// // console.log(sum(10,3,6,7,9))