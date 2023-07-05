function validateForm(event) {
    event.preventDefault();
  
    clearErrors();
  
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var agreement = document.getElementById("agreement").checked;
  
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    var passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  
    var isValid = true;
  
    if (!fullName.match(/^[a-zA-Z\s]*$/)) {
      document.getElementById("fullNameError").textContent =
        "* Invalid full name";
      isValid = false;
    }
  
    if (!username.match(alphanumericRegex)) {
      document.getElementById("usernameError").textContent =
        "* Invalid username (alphanumeric characters only)";
      isValid = false;
    }
  
    if (!password.match(passwordRegex)) {
      document.getElementById("passwordError").textContent =
        "* Invalid password (min. 8 characters with at least one letter, one digit, and one special character)";
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent =
        "* Passwords don't match";
      isValid = false;
    }
  
    if (!gender) {
      document.getElementById("genderError").textContent = "* Select a gender";
      isValid = false;
    }
  
    if (!phone.match(/^[0-9]{10}$/)) {
      document.getElementById("phoneError").textContent =
        "* Invalid phone number (10 digits only)";
      isValid = false;
    }
  
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      document.getElementById("emailError").textContent =
        "* Invalid email address";
      isValid = false;
    }
  
    if (!state) {
      document.getElementById("stateError").textContent = "* Select a state";
      isValid = false;
    }
  
    if (!agreement) {
      document.getElementById("agreementError").textContent =
        "* You must agree to the terms and conditions";
      isValid = false;
    }
  
    if (isValid) {
      window.location.href = "login.html";
    }
  }
  
  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }