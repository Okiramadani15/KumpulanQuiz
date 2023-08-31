import readLine from "readline";
import MahasiswaController from "./controllers/MahasiswaController.js";
import JurusanController from "./controllers/JurusanController.js";
import DosenController from "./controllers/DosenController.js";
import MataKuliahController from "./controllers/MataKuliahController.js";
import KRSController from "./controllers/KRSController.js";
import login from "./models/login.js";

export const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export function Login() {
  console.log(`
    Welcome to University Pendidikan indonesia
    jl.setiabudhi no 255
    `);
  let garis = "";
  for (let i = 0; i < 100; i++) {
    garis += "=";
    rl.question("Masukkan username: ", (username) => {
      rl.question("Masukkan password: ", (pass) => {
        login.Username(username,function(data) {
          if (!data) {
            console.log("Data tidak Ditemukan");
            Login();
          }
          else if (data.username === username && data.pass === pass) {
            menuUtama();
          }
        });
      });
    });
  }
}

export function menuUtama() {
  let garis = "";
  for (let i = 0; i < 100; i++) {
    garis += "=";
  }
  console.log(garis);
  console.log(`
Silahkan pilih menu dibawah ini:
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`);
  {
    let garis = "";
    for (let i = 0; i < 100; i++) {
      garis += "=";
    }
    console.log(garis);
  }

  rl.question("masukkan salah satu nomor dari opsi diatas: ", (answer) => {
    let garis = "";
    for (let i = 0; i < 100; i++) {
      garis += "=";
    }
    console.log(garis);
    switch (answer) {
      case "1":
        MahasiswaController.menu();
        break;
      case "2":
        JurusanController.menu();
        break;
      case "3":
        DosenController.menu();
        break;
      case "4":
        MataKuliahController.menu();
        break;
      case "5":
        KRSController.menu();
        break;
      case "6":
        process.exit(0);
      default:
        let garis = "";
        for (let i = 0; i < 100; i++) {
          garis += "=";
        }
        console.log(garis);
        console.log("anda salah memasukkan opsi, silahkan coba lagi!");
        menuUtama();
        break;
    }
  });
}

Login();
