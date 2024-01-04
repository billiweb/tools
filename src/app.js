function formatDate() {
  var input = document.getElementById("dateInput");
  var inputValue = input.value;

  // Remove non-numeric characters
  var numericValue = inputValue.replace(/\D/g, "");

  // Check if the value is not empty
  if (numericValue.length > 0) {
    var formattedDate = numericValue.substring(0, 4);

    if (numericValue.length >= 5) {
      formattedDate += "-" + numericValue.substring(4, 6);
    }

    if (numericValue.length >= 7) {
      formattedDate += "-" + numericValue.substring(6, 8);
    }

    // Set the formatted date back to the input field
    input.value = formattedDate;
  }
}

function calculateAge() {
  var dateInput = document.getElementById("dateInput").value;

  // Validate the input date format
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateInput)) {
    alert("Please enter a valid date in the format yyyy-mm-dd");
    return;
  }

  // Assuming the current date is 2024-01-03 for calculation
  var currentDate = new Date(2024, 0, 3);

  var parts = dateInput.split("-");
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1; // Months are zero-based
  var day = parseInt(parts[2], 10);

  var birthDate = new Date(year, month, day);

  var age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerHTML = age + "세";
}
