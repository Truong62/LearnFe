function showError() {
  const e = document.getElementById("fname").value;
  if(e = null){
    alert("ko de trong")
    return false
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById("country").value;
    const comment = document.getElementById("comment").value;

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
