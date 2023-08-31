import Table from "cli-table";
import Jurusan from "../models/Jurusan.js";
import { rl, menuUtama } from "../university.js";
import { showTable } from "../views/JurusanView.js";

export default class JurusanController {
  static menu() {
    console.log(`
Silahkan pilih opsi dibawah ini : 
[1] Daftar jurusan 
[2] Cari jurusan 
[3] Tambah jurusan 
[4] Hapus jurusan 
[5] Kembali       
        `);
    rl.question("masukan salah satu nomor dari opsi diatas: ", (answer) => {
      switch (answer) {
        case "1":
          JurusanController.daftar();
          break;
        case "2":
          JurusanController.cari();
          break;
        case "3":
          JurusanController.tambah();
          break;
        case "4":
          JurusanController.hapus();
          break;
        case "5":
          menuUtama();
          break;
        default:
          break;
      }
    });
  }

  static daftar() {
    Jurusan.find(function (data) {
      showTable(data);
      JurusanController.menu();
    });
  }
  static cari() {
    rl.question("Masukkan id jurusan: ", (id) => {
      Jurusan.idjurusan = id;
      Jurusan.cari((data) => {
        if (!data) {
          console.log("Data jurusan tidak ditemukan");
          JurusanController.menu();
        } else {
          console.log("Data Jurusan");
          console.log(`Kode Jurusan: ${data.idjurusan}`);
          console.log(`Nama Jurusan: ${data.namajurusan}`);
        }
        JurusanController.menu();
      });
    });
  }
  static tambah() {
    console.log("Menambahkan data Jurusan baru");
    rl.question("Masukkan ID jurusan: ", (idjurusan) => {
      rl.question("Masukkan Nama jurusan: ", (namajurusan) => {
        Jurusan.idjurusan = idjurusan;
        Jurusan.namajurusan = namajurusan;
        Jurusan.tambah(() => {
          Jurusan.find((data) => {
            showTable(data);
            JurusanController.menu();
          });
        });
      });
    });
  }

  static hapus() {
    rl.question("Masukkan ID jurusan: ", (idjurusan) => {
      Jurusan.hapus(idjurusan, () => {
        JurusanController.menu();
      });
    });
  }
}
