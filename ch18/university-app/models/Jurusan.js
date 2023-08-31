import { db } from "./connect.js";

export default class Jurusan {
  constructor(obj) {
    this.idjurusan = obj.idjurusan;
    this.namajurusan = obj.namajurusan;
  }

  save(next) {
    //prototye
    db.run("INSERT INTO jurusan (idjurusan, namajurusan) VALUES (?,?)", [this.idjurusan, this.namajurusan], (err) => {
      if (err) {
        console.log(err);
      }
      next();
    });
  }
  static find(next) {
    //static
    const sql = "SELECT * FROM jurusan";
    db.all(sql, (err, rows) => {
      if (err) {
        console.log(err);
      }
      next(rows);
    });
  }
  static cari(next) {
    const sql = "SELECT * FROM jurusan WHERE idjurusan = ?";
    db.get(sql, [this.idjurusan], (err, rows) => {
      if (err) {
        console.log("Jurusan tidak tersedia");
      }
      next(rows);
    });
  }
  static tambah(next) {
    db.run(`INSERT INTO jurusan (idjurusan, namajurusan) VALUES (?,?)`, [this.idjurusan, this.namajurusan], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data jurusan berhasil ditambahkan.");
        next();
      }
    });
  }
  static hapus(id,next) {
    db.run(`DELETE FROM jurusan WHERE idjurusan = ?`, [id], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data jurusan berhasil dihapus.");
        next();
      }
    });
  }
}
