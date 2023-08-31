import Table from "cli-table";

export function showTable(data = []) {
  var table = new Table({
    head: ["ID Jurusan", "Nama Jurusan"],
    colWidths: [10, 100],
  });

  data.forEach((item) => {
    table.push([item.idjurusan, item.namajurusan]);
  });

  console.log(table.toString());
}
