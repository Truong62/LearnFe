// function xuLyPhimXuong(event) {
//   document.getElementById("output").innerHTML = "Phím xuống: " + event.key;
// }
// function xuLyPhimLen(event) {
//   document.getElementById("output").innerHTML = "Phím lên: " + event.keyco;
// }
// document.addEventListener("keydown", xuLyPhimXuong);
// document.addEventListener("keyup", xuLyPhimLen);

const InputKey = document.getElementById("InputKey");
InputKey.style.padding = "10px";
InputKey.style.boxShadow = "1px 1px 1px black";
InputKey.style.width = "10%"

function xuLyPhimXuong(event) {
    InputKey.style.display="none"
  const phimSo = event.keyCode;
  document.getElementById("output").innerHTML = "Phím xuống: " + phimSo;
}

document.addEventListener("keydown", xuLyPhimXuong);