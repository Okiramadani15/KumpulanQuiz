import Table from "cli-table";

export function showTable(data = []) {
  console.log(data);
  var table = new Table({
    head: ["nim", "nama", "tanggal_lahir", "alamat", "idjurusan", "namajurusan"],
    colWidths: [10, 10, 10, 20, 20, 30],
  });

  data.forEach((item) => {
    table.push([item.nim, item.nama, item.tanggal_lahir, item.alamat, item.idjurusan, item.namajurusan]);
  });

  console.log(table.toString());
}
