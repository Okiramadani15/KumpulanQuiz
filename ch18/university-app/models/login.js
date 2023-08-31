import { db } from "./connect.js";

export default class Jurusan {
  constructor(obj) {
    this.idjurusan = obj.idjurusan;
    this.namajurusan = obj.namajurusan;
  }
  static Username(next) {
    db.run(`INSERT INTO mahasiswa (nim, nama, tanggal_lahir, alamat, idjurusan) VALUES (?,?,?,?,?)`, [this.nim, this.nama, this.tanggal_lahir, this.alamat, this.idjurusan], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data mahasiswa berhasil ditambahkan.");
        next();
      }
    });
  }
  static password(next) {
    db.run(`INSERT INTO mahasiswa (nim, nama, tanggal_lahir, alamat, idjurusan) VALUES (?,?,?,?,?)`, [this.nim, this.nama, this.tanggal_lahir, this.alamat, this.idjurusan], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data mahasiswa berhasil ditambahkan.");
        next();
      }
    });
  }
}
