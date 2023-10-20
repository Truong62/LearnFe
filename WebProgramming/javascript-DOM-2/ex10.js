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



const populatedCountries = [
  { name: "China", population: 1444216107 },
  { name: "India", population: 1393409038 },
  { name: "United States", population: 331002651 },
  // Add more countries here
];

const spokenLanguages = [
  { name: "Mandarin", speakers: 918100000 },
  { name: "Spanish", speakers: 460000000 },
  { name: "English", speakers: 375000000 },
  // Add more languages here
];

function createBarChart(data, containerId, xProp, yProp) {
  const container = document.getElementById(containerId);
  const chart = document.createElement("div");
  chart.classList.add("chart");
  container.appendChild(chart);

  data.forEach((item) => {
    const bar = document.createElement("div");
    bar.style.width = (item[yProp] / data[0][yProp]) * 100 + "%";
    bar.textContent = `${item[xProp]} - ${item[yProp]}`;
    chart.appendChild(bar);
  });
}

createBarChart(populatedCountries, "population-chart", "name", "population");
createBarChart(spokenLanguages, "language-chart", "name", "speakers");