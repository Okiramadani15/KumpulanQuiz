import Table from "cli-table";
import KRS from "../models/KRS.js";
import { rl, menuUtama } from "../university.js";
import { showTable } from "../views/KRSView.js";

export default class KRSController {
  static menu() {
    console.log(`
Silahkan pilih opsi dibawah ini : 
[1] Kontrak Nilai 
[2] Cari Data Nilai
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Kembali       
        `);
    rl.question("masukan salah satu nomor dari opsi diatas: ", (answer) => {
      switch (answer) {
        case "1":
          KRSController.daftar();
          break;
        case "2":
          KRSController.cari();
          break;
        case "3":
          KRSController.tambah();
          break;
        case "4":
          KRSController.hapus1();
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
    KRS.find(function (data) {
      showTable(data);
      KRSController.menu();
    });
  }
  static cari() {
    rl.question("Masukkan id: ", (id) => {
      KRS.id = id;
      KRS.cari((data) => {
        if (!data) {
          console.log("Data Nilai tidak ditemukan");
          KRSController.menu();
        } else {
          console.log("Data mahasiswa");
          console.log(`ID: ${data.id}`);
          console.log(`NIM: ${data.nim}`);
          console.log(`Kode Matkul: ${data.Kodematkul}`);
          console.log(`ID Dosen: ${data.iddosen}`);
          console.log(`Nilai: ${data.Nilai}`);
          KRSController.menu();
        }
      });
    });
  }
  static tambah() {
    console.log("Menambahkan Nilai baru");
    rl.question("Masukkan ID: ", (id) => {
      rl.question("Masukkan NIM Mahasiswa : ", (nim) => {
        rl.question("Masukkan Kode Matkul: ", (Kodematkul) => {
          rl.question("Masukkan ID Dosen: ", (iddosen) => {
            rl.question("Masukkan Nilai: ", (Nilai) => {
              KRS.find((rows) => {
                KRS.id = id;
                KRS.nim = nim;
                KRS.Kodematkul = Kodematkul;
                KRS.iddosen = iddosen;
                KRS.Nilai = Nilai;
                KRS.tambah(() => {
                  KRS.find((data) => {
                    showTable(data);
                    KRSController.menu();
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  static hapus1() {
    rl.question("Masukkan ID Kontrak: ", (id) => {
      KRS.hapus(id, () => {
        KRSController.menu();
      });
    });
  }
}
