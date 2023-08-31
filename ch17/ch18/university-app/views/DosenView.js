import Table from "cli-table";

export function showTable(data = []){
    var table = new Table({
        head: ['ID Dosen', 'Nama Dosen',]
      , colWidths: [10, 20]
    });
    data.forEach((item)=>{
    table.push([item.iddosen, item.namadosen] )
});

    console.log(table.toString()); 
}