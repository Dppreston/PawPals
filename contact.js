let menuUsername = document.querySelector(".menu-username");
const loggedIn = JSON.parse(localStorage.getItem("CurrentAccount"));
const notLoggedIn = !loggedIn;
const profilePicture = document.querySelector(".profile-picture");
const pawIcon = document.getElementById("paw");
const siteWideUsername = localStorage.getItem("Username");
const siteWideBio = localStorage.getItem("bio");
const logoBtn = document.querySelector(".logo");

userInfo = JSON.parse(localStorage.getItem("localUser"));

if (notLoggedIn) {
  menuUsername.innerText = "login";
  logoBtn.addEventListener("click", (e) => {
    location.href = "homepage.html";
  });
}

if (loggedIn) {
  //menu bar text
  menuUsername.innerText = siteWideUsername;
  //profile picture & name in top bar
  profilePicture.classList.remove("hidden");
  pawIcon.remove(pawIcon);
  logoBtn.addEventListener("click", (e) => {
    location.href = "dashboard.html";
  });
}
