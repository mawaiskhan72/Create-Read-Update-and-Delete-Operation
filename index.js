function addData() {
  // Get input values
  let name =
    document.getElementById("nameInput").value;
  let country =
    document.getElementById("countryInput").value;
  let age=
    document.getElementById("ageInput").value;
  let Mobile =
    document.getElementById("MobileInput").value;

  let table = document.getElementById("outputTable");
  let newRow = table.insertRow(table.rows.length);
  
  
  newRow.insertCell(0).innerHTML = name;
  newRow.insertCell(1).innerHTML = country;
  newRow.insertCell(2).innerHTML = age;
  newRow.insertCell(3).innerHTML = Mobile;
  newRow.insertCell(4).innerHTML =
    '<button onclick="editData(this)">Edit</button>'+
    '<button onclick="deleteData(this)">Delete</button>';
  

  clearInputs();
}

function editData(button) {

  let row = button.parentNode.parentNode;

  let nameCell = row.cells[0];
  let countryCell = row.cells[1];
  let ageCell = row.cells[2];
  let MobileCell = row.cells[3];
  
  let nameInput =
    prompt("Enter the updated Name:",
      nameCell.innerHTML);
  let countryInput =
    prompt("Enter the updated country:",
      countryCell.innerHTML);
  let ageInput =
    prompt("Enter the updated Age:",
      ageCell.innerHTML
    );
  let MobileInput =
    prompt("Enter the updated Mobile:",
      MobileCell.innerHTML
    );
  

  nameCell.innerHTML = nameInput;
  countryCell.innerHTML = countryInput;
  mobileCell.innerHTML = ageInput;
  MobileCell.innerHTML = MobileInput;
}
function deleteData(button) {
  
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function clearInputs() {
  
  document.getElementById("nameInput").value = "";
  document.getElementById("countryInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("MobileInput").value = "";
}

function validateMobile(input) {
  var mobileNumber = input.value.replace(/\D/g, ''); // Remove non-numeric characters
  var errorSpan = document.getElementById('mobileError');

  if (mobileNumber.length === 11) {
      errorSpan.textContent = '';
  }
}