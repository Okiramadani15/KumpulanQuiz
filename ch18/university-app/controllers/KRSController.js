import Table from "cli-table";
import KRS from "../models/KRS.js";
import { rl, menuUtama } from "../university.js";
import Mahasiswa from "../models/Mahasiswa.js";
import { showTable as showTableMahasiswa } from "../views/MahasiswaView.js";
import { showTable as showTablematkul } from "../views/MataKuliahView.js";
import { showTable as showTabledosen } from "../views/DosenView.js";
import MataKuliah from "../models/MataKuliah.js";
import { showTable as showTable } from "../views/KRSView.js";
import Dosen from "../models/Dosen.js";

export default class KRSController {
  static menu() {
    console.log(`
Silahkan pilih opsi dibawah ini : 
[1] Kontrak Nilai 
[2] Cari Data Nilai
[3] Tambah Kontrak
[4] update Kontrak
[5] hapus Kontrak
[6] Kembali       
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
          KRSController.updateNilai();
          break;
        case "5":
          KRSController.hapus1();
          break;
        case "6":
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
    rl.question("Masukkan nim: ", (nim) => {
      KRS.cari(nim, (data) => {
        if (!data) {
          console.log("Data Nilai tidak ditemukan");
          KRSController.menu();
        } else {
          console.log("Data mahasiswa");
          KRS.find(function (data) {
            showTable(data);
            KRSController.menu();
          });
        }
      });
    });
  }
  static tambah() {
    console.log("Menambahkan Nilai baru");
    Mahasiswa.find(function (datamahasiswa) {
      showTableMahasiswa(datamahasiswa);
      rl.question("Masukkan NIM Mahasiswa : ", (nim) => {
        MataKuliah.find(function (datamatkul) {
          showTablematkul(datamatkul);
          rl.question("Masukkan Kode Matkul: ", (Kodematkul) => {
            Dosen.find(function (datadosen) {
              showTabledosen(datadosen);
              rl.question("Masukkan ID Dosen: ", (iddosen) => {
                KRS.nim = nim;
                KRS.Kodematkul = Kodematkul;
                KRS.iddosen = iddosen;
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
  static updateNilai(next, id) {
    KRS.find(function (data) {
      showTable(data);
      rl.question(`Tambah Nilai: `, (Nilai) => {
        rl.question(`Masukkan id Kontrak : `, (id) => {
          KRS.updateNilai(Nilai, id, () => {
            KRS.find(function (data) {
              showTable(data);
              KRSController.menu();
            });
          });
        });
      });
    });
  }
  static hapus1() {
    rl.question("Masukkan Nim Mahasiswa: ", (id) => {
      KRS.hapus(id, () => {
        KRSController.menu();
      });
    });
  }
}
