function ExtractChar() {
  const textValue = document.getElementById("inputText").value;
  var uniqueCharacters = new Set();
  var characters = textValue.split("");
  for (var i = 0; i < characters.length; i++) {
    uniqueCharacters.add(characters[i]);
  }
  document.getElementById("show").textContent = `= ${Array.from(uniqueCharacters)}`;
}

const inputText = document.getElementById("inputText");
inputText.addEventListener("input", ExtractChar);