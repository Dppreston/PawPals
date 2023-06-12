let menuUsername = document.querySelector(".menu-username");
const loggedIn = JSON.parse(localStorage.getItem("CurrentAccount"));
const notLoggedIn = !loggedIn;
const profilePicture = document.querySelector(".profile-picture");
const pawIcon = document.getElementById("paw");
const profileCircle = document.querySelector(".profile-circle");

userInfo = JSON.parse(localStorage.getItem("localUser"));
const siteWideUsername = localStorage.getItem("Username");
const siteWidePassword = localStorage.getItem("password");

if (notLoggedIn) {
  menuUsername.innerText = "login";
}

if (loggedIn) {
  //menu bar text
  menuUsername.innerText = siteWideUsername;
  //profile picture & name in top bar
  // profilePicture.classList.remove("hidden");
  // pawIcon.remove(pawIcon);
}

// login function

const incorrectLogin = document.querySelector(".incorrect-login");
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    loginUsernameInput.value == siteWideUsername &&
    loginPasswordInput.value == siteWidePassword
  ) {
    window.location.href = "dashboard.html";
    alert("You Have Succesfully Logged In");
    localStorage.setItem(
      "CurrentAccount",
      JSON.stringify(loginUsernameInput.value)
    );
  } else {
    incorrectLogin.classList.remove("hidden");
  }
});
