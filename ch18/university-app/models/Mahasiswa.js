import { db } from "./connect.js";

export default class Mahasiswa {
  constructor(obj) {
    this.nim = obj.nim;
    this.nama = obj.nama;
    this.tanggal_lahir = obj.tanggal_lahir;
    this.alamat = obj.alamat;
    this.idjurusan = obj.idjurusan;
  }

  save(next) {
    //prototye
    db.run("INSERT INTO mahasiswa (nim, nama, tanggal_lahir, alamat, idjurusan) VALUES (?,?,?,?,?)", [this.nim, this.nama, This.tanggallahir, this.alamat, this.idjurusan], (err) => {
      if (err) {
        console.log(err);
      }
      next();
    });
  }

  static find(next) {
    //static
    const sql = "SELECT * FROM mahasiswa LEFT JOIN jurusan using(idjurusan)";
    db.all(sql, (err, rows) => {
      if (err) {
        console.log(err);
      } else next(rows);
    });
  }
  static cari(next) {
    const sql = "SELECT * FROM mahasiswa JOIN jurusan USING (idjurusan) WHERE nim = ?";
    db.get(sql, [this.nim], (err, rows) => {
      if (err) {
        console.log("Gagal mencari data mahasiswa");
      }
      next(rows);
    });
  }
  static tambah(next) {
    db.run(`INSERT INTO mahasiswa (nim, nama, tanggal_lahir, alamat, idjurusan) VALUES (?,?,?,?,?)`, [this.nim, this.nama, this.tanggal_lahir, this.alamat, this.idjurusan], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data mahasiswa berhasil ditambahkan.");
        next();
      }
    });
  }
  static hapus(id,next) {
    db.run(`DELETE FROM mahasiswa WHERE nim = ?`, [id], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data mahasiswa berhasil dihapus.");
        next();
      }
    });
  }
}
