function indexprime(param1){
  let hasil=[]
 for ( let i = 2; ; i++){
    let bPrima = false
    for ( let j = 2; j< i; j++){
     if ( i % j === 0){
         bPrima= true
     }  
    } if (!bPrima){
        hasil.push(i)
    } if(hasil.length === param1){
        break;
    } 
 }
    return hasil[param1 - 1]
 }
    
  



console.log(indexprime(4))
console.log(indexprime(500))
console.log(indexprime(37786))
