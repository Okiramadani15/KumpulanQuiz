import Table from "cli-table";
import Mahasiswa from "../models/Mahasiswa.js";
import Jurusan from "../models/Jurusan.js";
import { rl, menuUtama } from "../university.js";
import { showTable } from "../views/MahasiswaView.js";

export default class MahasiswaController {
  static menu() {
    console.log(`
Silahkan pilih opsi dibawah ini : 
[1] Daftar Mahasiswa 
[2] Cari Mahasiswa 
[3] Tambah Mahasiswa 
[4] Hapus Data Mahasiswa
[5] Kembali  
`);

    rl.question("masukan salah satu nomor dari opsi diatas: ",(answer) => {
      switch (answer) {
        case "1":
          MahasiswaController.daftar();
          break;
        case "2":
          MahasiswaController.cari();
          break;
        case "3":
          MahasiswaController.tambah();
          break;
        case "4":
          MahasiswaController.hapus();
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
    Mahasiswa.find(function (data) {
      showTable(data);
      MahasiswaController.menu();
    });
  }
  static cari() {
    rl.question("Masukkan NIM: ", (nim) => {
      Mahasiswa.nim = nim;
      Mahasiswa.cari((data) => {
        if (!data) {
          console.log("Data mahasiswa tidak ditemukan");
          MahasiswaController.menu();
        } else {
          console.log("Data mahasiswa");
          console.log(`NIM: ${data.nim}`);
          console.log(`Nama: ${data.nama}`);
          console.log(`tanggal_lahir: ${data.tanggal_lahir}`);
          console.log(`Alamat: ${data.alamat}`);
          console.log(`Kode Jurusan: ${data.idjurusan}`);
          console.log(`Nama Jurusan: ${data.namajurusan}`);
          MahasiswaController.menu();
        }
      });
    });
  }
  static tambah() {
    console.log("Menambahkan data mahasiswa baru");
    rl.question("Masukkan NIM: ", (nim) => {
      rl.question("Masukkan Nama: ", (nama) => {
        rl.question("Masukkan tanggal lahir: ", (tanggal_lahir) => {
          rl.question("Masukkan Alamat: ", (alamat) => {
            Jurusan.find((rows) => {
              const table = new Table({
                head: ["ID Jurusan", "Nama Jurusan"],
                colWidths: [12, 20],
              });
              rows.forEach((row) => {
                table.push([row.idjurusan, row.namajurusan]);
              });
              console.log(table.toString());
              rl.question("Masukkan ID jurusan: ", (jurusan) => {
                Mahasiswa.nim = nim;
                Mahasiswa.nama = nama;
                Mahasiswa.tanggal_lahir = tanggal_lahir;
                Mahasiswa.alamat = alamat;
                Mahasiswa.idjurusan = jurusan;
                Mahasiswa.tambah(() => {
                  Mahasiswa.find((data) => {
                    showTable(data);
                    MahasiswaController.menu();
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  static hapus() {
    rl.question("Masukkan Nim Mahasiswa: ", (nim) => {
      Mahasiswa.hapus(nim, () => {
        MahasiswaController.menu();
      });
    });
  }
}
