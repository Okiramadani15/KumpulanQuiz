const fs = require("fs");
const readline = require("readline")
const data = fs.readFileSync("toDo.json", "utf-8")
const obj = JSON.parse(data);
const command = process.argv[2], id = process.argv[3], inform = process.argv.slice(3).join(" ")

let hapus = id -1
let tambah = obj.length +1


if(!command || command === 'help'){
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
    
}else if(command === 'list') {
        console.log("Daftar Pekerjaan")
        for(let x of obj) {
            if(x.complete) {
                x.complete = "[x]"
                console.log(`${x.ID}. ${x.complete}. ${x.title}.`)
            } else{
                x.complete = "[ ]"
                console.log(`${x.ID}. ${x.complete}. ${x.title}`)
            }
        
        }
        
    }else if(command === 'task') {
        for(let x in obj[hapus]) console.log(`${x}: ${obj[id-1][x]}`);

    }else if(command.toLowerCase() === 'add') {
        if(inform) {
            console.log(`"${inform}" Telah ditambahkan`)
            obj.push({"ID": tambah, "title": inform, "complete": false, tag: ""})
            fs.writeFileSync("toDo.json", JSON.stringify(obj), "utf-8")
        }else if(!inform || inform == " ") return

    }else if(command.toLocaleLowerCase() === 'delete') {
        console.log(`"${obj[id-1].title}" telah dihapus dari daftar`)
        obj.splice(hapus, 1)
        fs.writeFileSync("./toDo.json", JSON.stringify(obj), "utf-8")

    }else if(command.toLocaleLowerCase() === 'complete') {
        console.log(`"${obj[id -1].title}" telah selesai`)
        obj[id -1].complete =  true;
        fs.writeFileSync("toDo.json", JSON.stringify(obj), "utf-8")

    }else if(command.toLocaleLowerCase() === 'uncomplete') {
        console.log(`"${obj[id -1].title}" status selesai di batalkan`)
        obj[id -1].complete = false;
        fs.writeFileSync("toDo.json", JSON.stringify(obj), "utf-8")

    }else if(command.toLowerCase() === 'list:outstanding') {
        console.log('Daftar Pekerjaan')
        let outstanding = []
        for(let x of obj){
            if(!x.complete) {
                x.complete = "[]";
                outstanding.push(`${x.ID}. ${x.complete}. ${x.title}.`);
            } 
        }
        if(id === 'esc') {
            console.log(outstanding.join('\n'))
        }else if(id === 'desc') {
            console.log(outstanding.reverse().join('\n'))
            }

        } else if(command.toLowerCase() === 'list:completed') {
        console.log('Daftar Pekerjaan')
        let completed = []
        for(let x of obj) {
            if(x.complete) {
                x.complete = '[x]'
                completed.push(`${x.ID}. ${x.complete}. ${x.title}.`)

             }
            }
           if(id === 'esc') {
            console.log(completed.join('\n'))
           }else if(id === 'desc') {
            console.log(completed.reverse().join('\n'))
           }
        }

    else if(command.toLowerCase() === 'tag') {
        console.log(`"Tag ${process.argv.slice(4)}" telah ditambahkan ke dalam '${obj[obj.findIndex(x => x.ID == id)].title}'`)
        obj[hapus].tag = process.argv.slice(4);
        fs.writeFileSync("toDo.json", JSON.stringify(obj), "utf-8")

    }else if(command.toLowerCase().startsWith(`filter:${command.slice(7)}`)) {
        console.log("Daftar Pekerjaan")
        for(let x of obj) {
            if(x.tag.includes(command.slice(7))) {
                if(x.complete) {
                    x.complete = "[x]";
                    console.log(`${x.ID}. ${x.complete}. ${x.title}`)
                } else if(!x.complete) {
                    x.complete  = "[ ]"
                    console.log(`${x.ID}. ${x.complete}. ${x.title}`)
                }
            }
        }
    }