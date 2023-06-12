let menuUsername = document.querySelector(".menu-username");
const loggedIn = JSON.parse(localStorage.getItem("CurrentAccount"));
const notLoggedIn = loggedIn < "";
const profilePicture = document.querySelector(".profile-picture");
const pawIcon = document.getElementById("paw");
const profileCircle = document.querySelector(".profile-circle");
const welcome = document.getElementById("welcome-username");
const cardDogName = document.getElementById("dog-name");
const cardDogPicture = document.getElementById("dog-picture");
const cardOwnerName = document.getElementById("owner-name");
const cardDogAge = document.getElementById("dog-age");
const cardDogGender = document.getElementById("dog-gender");
const cardDogBreed = document.getElementById("dog-breed");
const cardDogMood = document.getElementById("dog-mood");
const cardDogSize = document.getElementById("dog-size");
const cardDogMotivation = document.getElementById("dog-motivation");
const cardDogBio = document.getElementById("dog-bio");

userInfo = JSON.parse(localStorage.getItem("localUser"));
const siteWideUsername = localStorage.getItem("Username");
const siteWideBio = localStorage.getItem("bio");

// not logged in

if (notLoggedIn) {
  menuUsername.innerText = "login";
}

// logged in

if (loggedIn) {
  //menu bar text
  menuUsername.innerText = siteWideUsername;
  //profile picture & name in top bar
  profilePicture.classList.remove("hidden");
  pawIcon.remove(pawIcon);
  //welcome name
  welcome.innerText = ` ${siteWideUsername}`;
  //card info
  cardDogName.innerText = `${userInfo[4]}`;
  cardOwnerName.innerText = ` ${siteWideUsername}`;
  cardDogGender.innerText = `${userInfo[6]}`;
  cardDogAge.innerText = ` ${userInfo[5]}`;
  cardDogBreed.innerText = ` ${userInfo[7]}`;
  cardDogSize.innerText = ` ${userInfo[8]}`;
  cardDogMood.innerText = ` ${userInfo[9]}`;
  cardDogMotivation.innerText = ` ${userInfo[10]}`;
  cardDogBio.innerText = `${siteWideBio}`;
}
