const fnameInput = document.getElementById("fname");
const errorMessage = document.getElementById("error-fullName");

const fullName = document.getElementById("fname").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const country = document.getElementById("country").value;
const comment = document.getElementById("comment").value;

fnameInput.addEventListener("input", function () {
  if (!fnameInput.checkValidity()) {
    errorMessage.textContent = "Please enter a valid full name.";
    errorMessage.style.display = "block";
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
});
const fnameInputemail = document.getElementById("email");
const errorEmail = document.getElementById("error-email");

fnameInputemail.addEventListener("input", function () {
   if (!fullName) {
     errorMessage.textContent = "Please enter a valid full name.";
     errorMessage.style.display = "block";
   } else {
     errorMessage.textContent = "";
     errorMessage.style.display = "none";
   }
   if (!fnameInputemail.checkValidity()) {
     errorEmail.textContent = "Please enter a valid email.";
     errorEmail.style.display = "block";
   } else {
     errorEmail.textContent = "";
     errorEmail.style.display = "none";
   }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
const selectedGenderInput = document.querySelector(
  'input[name="gender"]:checked'
);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const showInfor = document.querySelector(".showInfor");
    showInfor.innerHTML = `
      <h2>Customer Form:</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Comment:</strong> ${comment}</p>
    `;

    form.reset();
  });
});
