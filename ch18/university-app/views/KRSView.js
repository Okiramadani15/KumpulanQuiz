import Table from "cli-table";

export function showTable(data = []) {
  var table = new Table({
    head: ["id", "nim", "Kodematkul", "iddosen", "Nilai"],
    colWidths: [10, 20, 20, 20, 20],
  });

  data.forEach((item) => {
    table.push([item.id, item.nim, item.Kodematkul, item.iddosen, item.Nilai ? item.Nilai : '']);
  });

  console.log(table.toString());
}
export function completeTable(data = []) {
    var table = new Table({
      head: ["ID", "NIM","Nama Matkul", "Nama Dosen", "Nilai"],
      colWidths: [10, 10, 20, 20, 10],
    });
  
    data.forEach((item) => {
      table.push([item.id, item.nim, item.nama, item.namamatkul, item.namadosen, item.Nilai ? item.Nilai : '']);
    });
  
    console.log(table.toString());
  }
  