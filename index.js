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
  
  // Clear input fields
  clearInputs();
}

function editData(button) {
  
  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;
  
  // Get the cells within the row
  let nameCell = row.cells[0];
  let countryCell = row.cells[1];
  let ageCell = row.cells[2];
  let MobileCell = row.cells[3];
  
  // Prompt the user to enter updated values
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
  
  // Update the cell contents with the new values
  nameCell.innerHTML = nameInput;
  countryCell.innerHTML = countryInput;
  MobileCell.innerHTML = ageInput;
  MobileCell.innerHTML = MobileInput;
}
function deleteData(button) {
  
  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);
}
function clearInputs() {
  
  // Clear input fields
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

function editData(button) {
  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  // Get the cells within the row
  let nameCell = row.cells[0];
  let countryCell = row.cells[1];
  let ageCell = row.cells[2];
  let MobileCell = row.cells[3];

  // Prompt the user to enter updated values
  let nameInput = prompt("Enter the updated Name:", nameCell.innerHTML);
  let countryInput = prompt("Enter the updated country:", countryCell.innerHTML);
  let ageInput = prompt("Enter the updated Age:", ageCell.innerHTML);
  let MobileInput = prompt("Enter the updated Mobile:", MobileCell.innerHTML);

  // Update the cell contents with the new values
  nameCell.innerHTML = nameInput;
  countryCell.innerHTML = countryInput;
  ageCell.innerHTML = ageInput; // Update age as well
  MobileCell.innerHTML = MobileInput;
}
