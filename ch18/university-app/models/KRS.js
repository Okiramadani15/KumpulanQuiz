import { db } from "./connect.js";

export default class KRS {
  constructor(obj) {
    this.id = obj.id;
    this.nim = obj.nim;
    this.Kodematkul = obj.Kodematkul;
    this.iddosen = obj.iddosen;
    this.Nilai = "";
  }
  save(next) {
    //prototye
    db.run("INSERT INTO kontrak (id,nim,Kodematkul,iddosen,Nilai) VALUES (?,?)", [this.id, this.nim, this.Kodematkul, this.iddosen, this.Nilai], (err) => {
      if (err) {
        console.log(err);
      }
      next();
    });
  }

  static find(next) {
    //static
    const sql = "SELECT * FROM kontrak";
    db.all(sql, (err, rows) => {
      if (err) {
        console.log(err);
      }
      next(rows);
    });
  }
  static cari(next) {
    const sql = "SELECT * FROM kontrak WHERE id = ?";
    db.get(sql, [this.id], (err, rows) => {
      if (err) {
        console.log("Gagal mencari Nilai");
      }
      next(rows);
    });
  }
  static tambah(next) {
    db.run(`INSERT INTO kontrak (nim, Kodematkul, iddosen) VALUES (?,?,?)`, [this.nim, this.Kodematkul, this.iddosen], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data Nilai ditambahkan.");
        next();
      }
    });
  }
  static hapus(id, next) {
    db.run(`DELETE FROM kontrak WHERE id = ?`, [id], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data Nilai berhasil dihapus.");
        next();
      }
    });
  }
  static updateNilai(Nilai, id, next) {
    db.run(`UPDATE kontrak SET Nilai = ? WHERE id = ?`, [Nilai, id], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Nilai Berhasil di input.");
        next();
      }
    });
  }
  static complete(nim, next) {
    db.all(
      `SELECT kontrak.id, kontrak.nim, mahasiswa.nama, matakuliah.namamatkul, dosen.namadosen, kontrak.nilai FROM kontrak LEFT JOIN mahasiswa USING (nim) LEFT JOIN matakuliah USING (Kodematkul) LEFT JOIN dosen USING (iddosen) WHERE kontrak.nim`
    );
  }
}
