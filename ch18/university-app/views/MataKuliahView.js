import Table from "cli-table";

export function showTable(data = []) {
  var table = new Table({
    head: ["Kodematkul", "namamatkul", "SKS"],
    colWidths: [10, 20, 20],
  });

  data.forEach((item) => {
    table.push([item.Kodematkul, item.namamatkul, item.SKS]);
  });

  console.log(table.toString());
}
