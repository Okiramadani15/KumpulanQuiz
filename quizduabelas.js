
const fs = require("fs");
const readline = require("readline");
const data = fs.readFileSync("data.json", "utf-8");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "jawaban!: ",
});

const nilai = JSON.parse(data);
let wadah = 0;
let salah =0; 

nilai.push({"definition":"Sebutkan kota yang memiliki julukan kota Intan?", "term":"Garut"})

console.log("Selamat datang di permainan Tebak Kata, silahkan isi jawabannya dengan benar ya!");
console.log("pertanyaan:", nilai[wadah].definition);
rl.prompt();

rl.on("line", (hasil) => {
  if (hasil.toString() === nilai[wadah].term.toLowerCase()) {
    console.log("Selamat anda benar!");
    wadah++;

    if (wadah === nilai.length) {
      console.log("Hore Anda Menang!");
      rl.close();
    }
    console.log("pertanyaan:", nilai[wadah].definition.toLowerCase());

   } else if(hasil.toLowerCase() === "skip") {
    nilai.push(nilai[wadah])
    console.log('')
    salah++
    console.log('pertanyaan',nilai[wadah].definition.toLowerCase())
    kesalahan = 0;
    }else {
    salah++
    console.log(`Waduh, Anda kurang beruntung! coba lagi ${salah} kali.`);
  }

  rl.prompt();
}).on("close", () => {
  process.exit(0);
});
