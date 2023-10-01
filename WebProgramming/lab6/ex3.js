var table = document.getElementById("sampleTable");

function insert_Row() {
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();

  var inputElement1 = document.createElement("input");
  cell1.appendChild(inputElement1);

  var inputElement2 = document.createElement("input");
  cell2.appendChild(inputElement2);

  var inputElement3 = document.createElement("input");
  cell3.appendChild(inputElement3);
}

var inputNb = document.getElementById("inputNb");
inputNb.onclick = insert_Row;

var Del = document.getElementById("Del");
// Del.onclick = function () {

//     const inputNumber = prompt("Dòng muốn xóa: ");
//     const fomatnb = parseInt(inputNumber) +1;
//   table.deleteRow(parseInt(inputNumber + 1));
// };

Del.onclick = function () {
  const inputNumber = prompt("Dòng muốn xóa: ");
  const rowIndex = parseInt(inputNumber); 
  if (!isNaN(rowIndex) && rowIndex >= 1 && rowIndex < (table.rows.length + 1)) {
    table.deleteRow(rowIndex -1 );
  } else {
    alert(
      "Vui lòng nhập một số nguyên hợp lệ trong khoảng từ 1 đến " +
        (table.rows.length )
    );
  }
};