const showex7 = document.getElementById("showListEmp");

const arrIdemp = [];
const arrFname = [];
const arrLastName = [];
const arrNber = [];

function addListEmp() {
  const idEmp = document.getElementById("idNv").value;
  const firstNameEmp = document.getElementById("firstName").value;
  const lastNameidEmp = document.getElementById("LastName").value;
  const securityNbEmp = document.getElementById("numberSecurity").value;

  arrIdemp.push(idEmp);
  arrFname.push(firstNameEmp);
  arrLastName.push(lastNameidEmp);
  arrNber.push(securityNbEmp);

  
}
if (arrIdemp.length > 0) {
  showex7.style.display = "block";
} else {
  showex7.style.display = "none";
}
const sub = document.getElementById("submit");
sub.onclick = addListEmp;
