import Table from "cli-table";

export function showTable(data = []){
    //console.log(data)
    var table = new Table({
        head: ['id','nim','Kodematkul','iddosen','Nilai']
      , colWidths: [10,20,20,20,20]
    });
    
    data.forEach((item)=>{
    table.push([item.id, item.nim, item.Kodematkul, item.iddosen, item.Nilai] )
});

    console.log(table.toString()); 
}