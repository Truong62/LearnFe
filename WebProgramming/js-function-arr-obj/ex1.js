const getText = document.getElementById("inputText");

function stringText() {
  const getvalueText = getText.value;
  const reverse = getvalueText.split("").reverse();

  document.getElementById("showex1").textContent = `${reverse}`;
}

getText.addEventListener("input", stringText);