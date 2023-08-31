const fs = require('fs');
const readline = require("readline")
const data = fs.readFileSync("toDo.json", "utf-8")
const obj = JSON.parse(data);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
});

let counter = 0 

rl.on("line", (jawaban) => {
   process.argv[2] === help }
console.log(
    `>>> JS TODO <<<
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

   rl.prompt()

 if ( process.argv[2] === 'list'){
    for(let i=0; i < obj.length; i++)
    console.log(obj[counter])
 }
 if ( process.argv[2] === 'task'){
    console.log(obj[counter])
 }
 if ( process.argv[2] === 'add'){
    counter++
    obj.push({
       "id":counter,
       "content":process.argv[3],
       "complete":false,
       "filter": []
    })
    fs.writeFileSync("toDo.json", JSON.stringify(obj), "utf-8")
    console.log(`${process.argv.slice(3).join(" ")}"telah ditambahkan"`)
 }



}).on('close', () => {
    process.exit(0);x
  });