const fs = require('fs');
const readline = require("readline")
const data = fs.readFileSync("./todo.json", "utf-8")
const obj = JSON.parse(data);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
});
const command = process.argv[2],
        id = process.argv[3],
        inform = process.argv.slice(3).join(" ")

let tambah = obj.length +1
let hapus = id -1

if (!command || command === 'help'){
    console.log(`>>> JS TODO <<<
    node c13.js <command>
    node c13.js list
    node c13.js task <task_id>
    node c13.js add <task_conten>
    node c13.js delete <task_id>
    node c13.js complete <task_id>
    node c13.js uncomplete <task_id>
    node c13.js list:outstanding asc|desc
    node c13.js list:completed asc|desc
    node c13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N
    node c13.js filter:<tag_name`)

}else if (command === 'list' ) {
    console.log("daftar pekerjaan")
     
}
