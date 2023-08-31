function wierdMultiply(sentence){
    if (sentence <= 10  ){
        return sentence
    }
    let result = 1
    let pisah = sentence.toString()
    let pecah = pisah.split("")
 for (let i = 0; i < pecah.length;  i++){
  result *= pecah[i]   
} 
 return wierdMultiply(result)
    }
console.log(wierdMultiply(39))
console.log(wierdMultiply(999))
console.log(wierdMultiply(3))
