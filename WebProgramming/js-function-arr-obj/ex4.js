function hiddenEmail() {
  const email = document.getElementById("email").value;
  var firstEmail = email.substring(0, 5);
  var firstEmail2 = email.indexOf("@");
  const showEx4 = document.getElementById("showEx4");
  var lastEmail = email.substring(firstEmail2);
  showEx4.textContent = `${firstEmail}...${lastEmail} `;
}

const sub = document.getElementById("submit");

sub.onclick = hiddenEmail;