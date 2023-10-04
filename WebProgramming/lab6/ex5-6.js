const fnameInput = document.getElementById("fname");
const errorMessage = document.getElementById("error-fullName");
const styleEror = document.getElementsByTagName("input");
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const comment = document.getElementById("comment");

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
  if (!fullName.checkValidity()) {
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

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fullNameValue = fullName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const countryValue = country.value;
    const commentValue = comment.value;
    const showInfor = document.querySelector(".showInfor");

    if (
      !fullNameValue ||
      !emailValue ||
      !phoneValue ||
      !gender ||
      !countryValue ||
      commentValue == ""
    ) {
      showInfor.innerHTML = "<p style='color: red;'>error</p>";
    } else {
      showInfor.innerHTML = `
        <h2>Customer Form:</h2>
        <p><strong>Full Name:</strong> ${fullNameValue}</p>
        <p><strong>Email:</strong> ${emailValue}</p>
        <p><strong>Phone:</strong> ${phoneValue}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Country:</strong> ${countryValue}</p>
        <p><strong>Comment:</strong> ${commentValue}</p>
      `;

      form.reset();
    }
  });
});
