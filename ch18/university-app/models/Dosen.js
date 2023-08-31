import {db} from './connect.js'

export default class Dosen {
    constructor(obj){
        this.iddosen = obj.iddosen
        this.namadosen = obj.namadosen
    }

    save(next){ //prototye
        db.run('INSERT INTO dosen (iddosen, namadosen) VALUES (?,?)', [this.iddosen, this.namadosen],(err) =>{ 
            if (err) {
                console.log(err)
            }
            next()
        })
    }

    static find(next) { //static
        const sql = 'SELECT * FROM dosen' 
        db.all(sql, (err,rows) => {
            if (err) {
                console.log(err)
            }
            next(rows) 
        })
    }
        static cari(next){
            const sql = 'SELECT * FROM dosen WHERE iddosen = ?'
            db.get( sql, [this.iddosen], (err, rows) => {
                if (err) {
                  console.log("Data Dosen tidak tersedia");
                }
                next(rows);
              }
            );
          }
          static tambah(next) {
            db.run(
              `INSERT INTO dosen (iddosen, namadosen) VALUES (?,?)`,[this.iddosen,this.namadosen],
              (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Data Dosen berhasil ditambahkan.");
                next();
                }
              }
            );
          }
          static hapus(id,next) {
            db.run(`DELETE FROM dosen WHERE iddosen = ?`, [id], (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Data Dosen berhasil dihapus.");
                next();
              }
            });
          }
        }

    
