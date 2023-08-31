import Table from "cli-table";
import Dosen from "../models/Dosen.js";
import { rl, menuUtama } from "../university.js";
import { showTable } from "../views/DosenView.js";

export default class DosenController {
  static menu() {
    console.log(`
Silahkan pilih opsi dibawah ini : 
[1] Daftar Dosen 
[2] Cari Dosen 
[3] Tambah Dosen 
[4] Hapus Dosen 
[5] Kembali       
        `);
    rl.question("masukan salah satu nomor dari opsi diatas: ", (answer) => {
      switch (answer) {
        case "1":
          DosenController.daftar();
          break;
        case "2":
          DosenController.cari();
          break;
        case "3":
          DosenController.tambah();
          break;
        case "4":
          DosenController.hapus1();
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
    Dosen.find(function (data) {
      showTable(data);
      DosenController.menu();
    });
  }

  static cari() {
    rl.question("Masukkan id Dosen: ", (id) => {
      Dosen.iddosen = id;
      Dosen.cari((data) => {
        if (!data) {
          console.log("Data Dosen tidak ditemukan");
        } else {
          console.log("Data Dosen");
          console.log(`ID Dosen: ${data.iddosen}`);
          console.log(`Nama Dosen: ${data.namadosen}`);
        }
      });
    });
  }
  static tambah() {
    console.log("Menambahkan data Dosen baru");
    rl.question("Masukkan ID Dosen: ", (iddosen) => {
      rl.question("Masukkan Nama Dosen: ", (namadosen) => {
        Dosen.find((rows) => {
          Dosen.iddosen = iddosen;
          Dosen.namadosen = namadosen;
          Dosen.tambah(() => {
            Dosen.find((data) => {
              showTable(data);
              DosenController.menu();
            });
          });
        });
      });
    });
  }

  static hapus1() {
    rl.question("Masukkan ID Dosen: ", (iddosen) => {
      Dosen.hapus(iddosen, () => {
        DosenController.menu();
      });
    });
  }
}
