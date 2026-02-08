document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value.trim();

  // Error fields
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let mobileError = document.getElementById("mobileError");
  let successMsg = document.getElementById("successMsg");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  mobileError.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Name cannot be empty";
    isValid = false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email cannot be empty";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter valid email address";
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isNaN(mobile) || mobile.length !== 10) {
    mobileError.textContent = "Enter valid 10-digit mobile number";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "Form submitted successfully!";

    document.getElementById("myForm").reset();
  }
});
