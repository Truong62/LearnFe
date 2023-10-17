function RandomID() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let valueId = "";
  for (let i = 0; i <= 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    valueId += characters.charAt(randomIndex);
  }
document.getElementById("show").textContent = valueId
}
document.getElementById("Create").onclick = RandomID