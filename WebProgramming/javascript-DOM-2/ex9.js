function changeColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  document.getElementById(
    "text-year"
  ).style.color = `rgb(${red}, ${green}, ${blue})`;
}
function changeBackgound() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  document.getElementById(
    "text-backgound"
  ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // document.getElementById("text-backgound").style.padding ="8px;"
}

setInterval(changeColor, 1000);
setInterval(changeBackgound, 1000);

document.getElementById("complete").style.backgroundColor = "green";
document.getElementById("progress").style.backgroundColor = "gold";

const unfinishedItems = document.querySelectorAll(".unfinished");

for (const item of unfinishedItems) {
  item.style.backgroundColor = "red";
}

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   if (number <= 3) {
//     return true;
//   }
//   if (number % 2 === 0) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(number); i += 2) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function isEven(number) {
//   return number % 2 === 0;
// }

// function isOdd(number) {
//   return number % 2 !== 0;
// }

// function crTable() {
//   const number = parseInt(document.getElementById("number").value);

//   for (let i = 0; i <= number; i++) {
//     let table = document.createElement("h1");
//     table.style.fontSize = "24px";
//     if (isPrime(i)) {
//       table.textContent = `${i} (Số nguyên tố)`;
//     } else if (isEven(i)) {
//       table.textContent = `${i} (Số chẵn)`;
//     } else if (isOdd(i)) {
//       table.textContent = `${i} (Số lẻ)`;
//     }
//   }
// }
// const form = document.querySelector("form");
// form.addEventListener("submit", crTable);


function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function crTable(e) {
    e.preventDefault();
  const number = parseInt(document.getElementById("number").value);
  const resultContainer = document.getElementById("table-number");
  resultContainer.innerHTML = "";

  for (let i = 1; i <= number; i++) {
    let table = document.createElement("h1");
    table.style.fontSize = "24px";
    table.style.display = "inline-block";
    table.style.padding = "10px";
    table.style.margin = "25px";

    if (i % 2 === 0) {
      table.style.backgroundColor = "red";
    } else if (isPrime(i)) {
      table.style.backgroundColor = "green";
    } else {
      table.style.backgroundColor = "yellow";
    }

    table.textContent = `${i}`;
    resultContainer.appendChild(table);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", crTable);
