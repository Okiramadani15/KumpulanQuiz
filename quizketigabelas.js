const { readFileSync, writeFileSync } = require("fs");

let command = process.argv[2],
  id = process.argv[3];
let obj = JSON.parse(readFileSync("toDo.json", "utf-8"));

let hapus = id - 1;

if (!command || command === "help") {
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
    node c13.js filter:<tag_name`);
}

switch (command) {
  case "add":
    let content = process.argv.slice(3).join(" ");
    obj.push({ title: content, complete: false, tag: [] });
    writeFileSync("toDo.json", JSON.stringify(obj, null, 3), "utf8");
    console.log(`"${content}" Telah ditambahkan`);
    break;

  case "list":
    console.log("daftar kerjaan: ");
    obj.forEach((item, index) => {
      console.log(`${index + 1}. [ ${item.complete ? "X" : " "} ] ${item.title}`);
    });
    break;

  case "task":
    for (let x in obj[hapus]) console.log(`${x}: ${obj[id - 1][x]}`);
    break;

  case `delete`:
    console.log(`"${obj[id - 1].title}" Telah dihapus`);
    obj.splice(hapus, 1);
    writeFileSync("toDo.json", JSON.stringify(obj, null, 3), "utf8");
    break;

  case "complete":
    console.log(`"${obj[id - 1].title}" Telah selesai`);
    obj[id - 1].complete = true;
    writeFileSync("toDo.json", JSON.stringify(obj, null, 3), "utf8");
    break;

  case "uncomplete":
    console.log(`"${obj[id - 1].title}" status selesai dibatalkan`);
    obj[id - 1].complete = false;
    writeFileSync("toDo.json", JSON.stringify(obj, null, 3), "utf8");
    break;

  case "list:outstanding":
    console.log("Daftar Pekerjaan");
    let outstanding = [];
    for (let x of obj) {
      if (!x.complete) {
        x.complete = "[]";
        outstanding.push(`${x.id}. ${x.complete}. ${x.title}.`);
      }
    }
    if (id === "asc") {
      console.log(outstanding.join("\n"));
    } else if (id === "desc") {
      console.log(outstanding.reverse().join("\n"));
    }
    break;

  case `list:completed`:
    console.log("Daftar Pekerjaan");
    let completed = [];
    for (let x of obj) {
      if (x.complete) {
        x.complete = "[x]";
        completed.push(`${x.id}. ${x.complete}. ${x.title}.`);
      }
    }
    if (id === "asc") {
      console.log(completed.join("\n"));
    } else if (id === "desc") {
      console.log(completed.reverse().join("\n"));
    }
    break;
  case "tag":
    console.log(`"Tag ${process.argv.slice(4)}" telah ditambahkan ke dalam '${obj[hapus].title}'`);
    process.argv.slice(4).forEach((item) => {
      if (!obj[hapus].tag.includes(item)) obj[hapus].tag.push(item);
    });
    writeFileSync("toDo.json", JSON.stringify(obj, null, 3), "utf-8");
    break;

  case `filter:${process.argv[2].slice(7)}`:
    console.log("Daftar Pekerjaan");
    for (let [index, x] of obj.entries()) {
      if (x.tag.includes(command.slice(7))) {
        if (x.complete) {
          x.complete = "[x]";
          console.log(`${index + 1}. ${x.complete}. ${x.title}`);
        } else if (!x.complete) {
          x.complete = "[]";
          console.log(`${index + 1}. ${x.complete}. ${x.title}`);
        }
      }
    }
    break;
}
