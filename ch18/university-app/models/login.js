import { db } from "./connect.js";

export default class login {
  constructor(obj) {
    this.username = obj.username;
    this.pass = obj.pass;
  }
  static Username(username,next) {
    db.get(`SELECT * FROM login WHERE username =?`, [username], (err, rows) => {
      if (err) { throw err
      } else next(rows);
    });
  }

}
