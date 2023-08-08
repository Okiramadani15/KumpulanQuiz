const fs = require('fs');
const readline = require("readline")
const data = fs.readFileSync("data.json", "utf-8")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'jawaban!: ',
});

const nilai = JSON.parse(data);
let wadah = 0;

console.log("Selamat datang di permainan Tebak Kata, silahkan isi jawabannya dengan benar ya!")
console.log("pertanyaan:", nilai[wadah].definition);

rl.prompt();

rl.on('line', (hasil) => {
        if(hasil.toString() == nilai[wadah].term.toLowerCase()) {
            console.log('Selamat anda benar!')
            wadah++;

            if(wadah == nilai.length) {
                console.log("Hore Anda Menang!")
                rl.close() 
            }
            console.log('pertanyaan', nilai[wadah].definition);
        } else {
            console.log('Waduh, Anda kurang beruntung!')
        }

     rl.prompt();

}).on('close', () => {
  process.exit(0);
});