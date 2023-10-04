const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

const message = document.getElementById("message");

function profitableGamle(event) {
  event.preventDefault();

  const a = parseFloat(number1.value);
  const b = parseFloat(number2.value);
  const c = parseFloat(number3.value);

  const result = a * b - c;

  if (result > 1) {
    message.textContent = "Win";
  } else {
    message.textContent = "Lose";
  }

  message.style.display = "block";
}

const form = document.querySelector("form");
form.addEventListener("submit", profitableGamle);
