const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout,
    prompt: 'Tulis kalimatmu disini >',
 });

 rl.prompt();
rl.on('line', (line) => {
    let kalimat = ''
    let penyebut ='aiueo'
    let hasil = line.split(' ')
        for ( let i = 0; i < hasil.length; i++){
    if(penyebut.includes(hasil[i].charAt(0)) == true){
        kalimat += hasil[i] +' '   
    }
    if(penyebut.includes(hasil[i].charAt(0)) == false){
        kalimat += hasil[i].slice(1) + hasil[i].charAt(0) + 'nyo' + ' ';
    }
    console.log(`hasil konversi: ${kalimat}`)
}
  rl.prompt();
}).on('close', ()=>{
  console.log('semoga hari ini tambah ngerti!')
  process.exit(0);
})