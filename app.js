var username = document.myForm.username;
var usernameError = document.querySelector("#usernameError");

var password1 = document.myForm.password1;

var password2 = document.myForm.password2;

var passwordError = document.querySelector("#passwordError");

function validateUsername() {
  if (username.value.length <= 5) {
    usernameError.innerHTML = "username should be more than 5 characters";
    usernameError.style.color = "red";
    username.style.backgroundColor = "red";
    username.style.color = "white";
  } else if (username.value.length > 5 && username.value.length <= 15) {
    usernameError.innerHTML = "Valid Username";
    usernameError.style.color = "green";
    username.style.backgroundColor = "green";
    username.style.color = "white";
  } else if (username.value.length > 15) {
    usernameError.innerHTML = "username should not be more than 15 characters";
    usernameError.style.color = "orange";
    username.style.backgroundColor = "orange";
    username.style.color = "white";
  }
}

function validatePassword(form) {
  password1 = form.password1.value;
  password2 = form.password2.value;

  // If password not entered
  if (password1 == "") passwordError.innerHTML = "Please enter Password";
  // If confirm password not entered
  else if (password2 == "")
    passwordError.innerHTML = "Please enter Confirm Password";
  // If Not same return False.
  else if (password1 != password2) {
    passwordError.innerHTML = "Password did not match: Please try again...";
    passwordError.style.color = "red";
    return false;
  }

  // If same return True.
  else {
    passwordError.innerHTML = "Passwords Match";
    passwordError.style.color = "green";

    return true;
  }
}

function welcomeUser(){
    alert(`Welcome ${username.value}`)
}