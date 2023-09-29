function insert_Row() {
  var table = document.getElementById("sampleTable");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
