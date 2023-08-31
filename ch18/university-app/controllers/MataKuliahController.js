import Table from "cli-table";
import MataKuliah from "../models/MataKuliah.js";
import { rl, menuUtama } from "../university.js";
import { showTable } from "../views/MataKuliahView.js";

export default class MataKuliahController {
  static menu() {
    console.log(`
Silahkan pilih opsi dibawah ini : 
[1] Daftar Mata Kuliah 
[2] Cari Mata Kuliah 
[3] Tambah Mata Kuliah 
[4] Hapus Mata kuliah 
[5] Kembali       
        `);
    rl.question("masukan salah satu nomor dari opsi diatas: ", (answer) => {
      switch (answer) {
        case "1":
          MataKuliahController.daftar();
          break;
        case "2":
          MataKuliahController.cari();
          break;
        case "3":
          MataKuliahController.tambah();
          break;
        case "4":
          MataKuliahController.hapus1();
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
    MataKuliah.find(function (data) {
      showTable(data);
      MataKuliahController.menu();
    });
  }
  static cari() {
    rl.question("Masukkan Kode : ", (kode) => {
      MataKuliah.Kodematkul = kode;
      MataKuliah.cari((data) => {
        if (!data) {
          console.log("Data tidak Ditemukan");
          MataKuliahController.menu();
        } else {
          console.log("Cari Mata kuliah");
          console.log(`NIM: ${data.Kodematkul}`);
          console.log(`Nama: ${data.namamatkul}`);
          console.log(`SKS: ${data.SKS}`);
          MataKuliahController.menu();
        }
      });
    });
  }
  static tambah() {
    console.log("Menambahkan Mata Kuliah baru");
    rl.question("Masukkan Kode matkul: ", (Kodematkul) => {
      rl.question("Masukkan Nama Matkul : ", (namamatkul) => {
        rl.question("Masukkan Berapa SKS: ", (SKS) => {
          MataKuliah.find((rows) => {
            MataKuliah.Kodematkul = Kodematkul;
            MataKuliah.namamatkul = namamatkul;
            MataKuliah.SKS = SKS;
            MataKuliah.tambah(() => {
              MataKuliah.find((data) => {
                showTable(data);
                MataKuliahController.menu();
              });
            });
          });
        });
      });
    });
  }
  static hapus1() {
    rl.question("Masukkan Kode Mata Kuliah: ", (Kodematkul) => {
      MataKuliah.hapus(Kodematkul, () => {
        MataKuliahController.menu();
      });
    });
  }
}
