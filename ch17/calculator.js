
export const PI = 22/7

export default class Calculator {
    constructor (){
        this.nilai = 1
}

add(value){
    this.nilai += value
    return this
}

substract(value){
    this.nilai -= value
    return this
}

divide(value){
    this.nilai /= value
    return this
}

multiply(value){
    this.nilai *= value
    return this
}


square(){
    this.nilai = Math.pow(this.nilai, 2)
    return this
}

exponent(value){
    this.nilai = Math.pow(this.nilai,value)
    return this
}

squareRoot(){
    this.nilai = Math.sqrt(this.nilai)
    return this
}

x (value){
    this.nilai = value
}

result(){
console.log(this.nilai)
}
}

const calc = new Calculator()

calc.add(10).substract(5).result() // 1 + 10 - 5 = 6
calc.add(3).multiply(4).divide(6).result()//6+3*4 / 6 = 6
calc.nilai = 7 //set jari jari
console.log(`nilai sekarang : ${calc.nilai}°`)
calc.multiply(2).multiply(PI).result() //keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
calc.nilai= 7 //set jari jari 7
calc.square().multiply(PI).result() // luas lingkaran dengan jari jari => PI x r pangkat 2 = 154
calc.nilai = 4
calc.exponent(3).result() //4 pangkat 3 = 64
calc.squareRoot().result() // akar pangkat dari 64 = 8