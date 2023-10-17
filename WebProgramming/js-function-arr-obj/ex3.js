//ex3
function bubbleSort(event) {
  event.preventDefault();
  const nb1 = parseFloat(document.getElementById("number1").value);
  const nb2 = parseFloat(document.getElementById("number2").value);
  const nb3 = parseFloat(document.getElementById("number3").value);
  const nb4 = parseFloat(document.getElementById("number4").value);
  const nb5 = parseFloat(document.getElementById("number5").value);
  var arr = [];
  arr.push(nb1, nb2, nb3, nb4, nb5);
  const n = arr.length;
  console.log(arr);
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) {
     const showEx3 = document.getElementById("showex3");
     showEx3.textContent = `Sort min to max: ${arr}`;
      break;
    }
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", bubbleSort);
