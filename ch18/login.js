import { rl, menuUtama } from "../university.js";
import readLine from 'readline'


export function menuLogin() {
  console.log(`
  welcome to Universitas Pendidikan Indonesia
  JL. Setiabudhi No.255
`);
  let garis = "";
  for (let i = 0; i < 100; i++) {
    garis += "=";
  }
  console.log(garis);
  rl.question("Silahkan masukan nama dan password untuk login: ", (answer) => {
    switch (answer) {
      case "1":
        MahasiswaController.menu();
        break;
      case "2":
        JurusanController.menu();
        break;
        case "2":
        JurusanController.menu();
        break;
    }
  });
}
