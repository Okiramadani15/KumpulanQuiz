import {db} from './connect.js'

export default class MataKuliah {
    constructor(obj){
        this.Kodematkul = obj.Kodematkul
        this.namamatkul = obj.namamatkul
        this.SKS = obj.SKS

    }

    save(next){ //prototye
        db.run('INSERT INTO MataKuliah (Kodematkul, namamatkul, SKS) VALUES (?,?)', [this.Kodematkul, this.namamatkul, this.SKS],(err) =>{ 
            if (err) {
                console.log(err)
            }
            next()
        })
    }

    static find(next) { //static
        const sql = 'SELECT * FROM matakuliah' 
        db.all(sql, (err,rows) => {
            if (err) {
                console.log(err)
            }
            next(rows) 
        })
    }
    static cari(next) {
        const sql = 'SELECT * FROM matakuliah WHERE Kodematkul = ?'
        db.get( sql, [this.Kodematkul], (err, rows) => {
            if (err) {
            console.log("Gagal mencari daftar Mata kuliah");
            }
            next(rows);
        })
    }
    static tambah(next) {
        db.run(
          `INSERT INTO  matakuliah (Kodematkul,namamatkul,SKS) VALUES (?,?,?)`,[this.Kodematkul,this.namamatkul,this.SKS],
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Mata Kuliah berhasil ditambahkan.");
            next();
            }
          }
        );
      }
      static hapus(id,next) {
        db.run(`DELETE FROM matakuliah WHERE Kodematkul = ?`, [id], (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Data Mata Kuliah  berhasil dihapus.");
            next();
          }
        });
      }  
}