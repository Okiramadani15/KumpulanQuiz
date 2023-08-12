
if (!process.argv[2]) {
  console.log("tolong sertkan nama file sebagai inputan soalnya misal'node quizduabelas.js data.json'");
  process.exit()
  }
  
const { log } = require("console");
const fs = require("fs");
const readline = require("readline");
const data = fs.readFileSync(`./${process.argv[2]}`, "utf-8");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "jawaban!: ",
});
const nilai = JSON.parse(data)
let wadah = 0;
let salah =0; 


nilai.push({"definition":"Sebutkan kota yang memiliki julukan kota Intan?", "term":"Garut"})


console.log("Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini\n untuk bermain, jawablah dengan jawaban yang sesuai.\n silahkan isi jawabannya dengan benar ya!\n gunakan skip untuk menangguhkan pertanyaan dan diakhir pertanyaan yang akan ditanyakan.");
console.log("pertanyaan:", nilai[wadah].definition);
rl.prompt();

rl.on("line", (jawaban) => {
  if (hasil.toString() === nilai[wadah].term.toLowerCase()) {
    console.log("Selamat anda benar!");
    wadah++;

    if (wadah === nilai.length) {
      console.log("Hore Anda Menang!");
      rl.close();
    }
    console.log("pertanyaan:", nilai[wadah].definition.toLowerCase());

   } else if(jawaban.toLowerCase() === "skip") {
    nilai.push(nilai[wadah])
    console.log('')
    wadah++
    console.log('pertanyaan',nilai[wadah].definition.toLowerCase())
    salah = 0;
    }else {
    salah++
    console.log(`Waduh, Anda kurang beruntung! coba lagi ${salah} kali.`);
  }

  rl.prompt();
}).on("close", () => {
  process.exit(0);
});
