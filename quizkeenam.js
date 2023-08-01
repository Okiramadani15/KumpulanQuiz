function sentencesManipulation(sentence){
    let kalimat = ''
    let penyebut ='aiueo'
    let hasil = sentence.split(' ')
        for ( let i = 0; i < hasil.length; i++){
    if(penyebut.includes(hasil[i].charAt(0)) == true){
        kalimat += hasil[i] +' '   
    }
    if (penyebut.includes(hasil[i].charAt(0)) == false){
        kalimat += hasil[i].slice(1) + hasil[i].charAt(0) + 'nyo' + ' ';
    }
}
    console.log(kalimat)
}

sentencesManipulation('ibu pergi kepasar bersama aku')