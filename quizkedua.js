function deretKaskus(n) {
 let hitung =[]
    for (let i = 0; i < n; i++){
    let jumlah = 3 * (i + 1);
hitung.push(jumlah)

if ( hitung [i] % 5 === 0 && hitung[i] %6 === 0 ) {
    hitung[i] = 'KASKUS'
}if ( hitung [i] % 5 === 0 ) {
    hitung[i] = 'KAS'
} if (hitung [i] % 6 === 0  ) {
    hitung[i] = 'KUS'
}
}
console.log(hitung)
}
deretKaskus(10)
//console.log(y)

//console.log(deretKaskus(10