const home = document.querySelector(".intro-container");
let menuUsername = document.querySelector(".menu-username");
const siteWideUsername = localStorage.getItem("Username");
const siteWidePassword = localStorage.getItem("password");

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".intro-text");
  const image = document.getElementById("intro-image");
  home.classList.remove("hidden");
  text.classList.add("fadein");
  image.classList.add("fadein");
});

//locked alert

const locked = document.querySelectorAll(".locked-alert");

locked[0].addEventListener("click", (e) => {
  alert("Please Log In or Sign Up to use this feature");
});
locked[1].addEventListener("click", (e) => {
  alert("Please Log In or Sign Up to use this feature");
});

//create account button function
const createBtn = document.getElementById("create-account-btn");
const createAccount = document.querySelector(".create-container");

createBtn.addEventListener("click", function (e) {
  if (e) {
    home.classList.add("fadeout");
    setTimeout(() => {
      home.classList.add("hidden");
      createAccount.classList.remove("hidden");
      createAccount.classList.add("fadein");
    }, 500);
  }
});

const createForm = document.getElementById("create-account-form");

//preventing enter key

createForm.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

// create account functions

const question = document.querySelectorAll(".question-style");
const nameBtn = document.getElementById("name-btn");
let firstName = document.getElementById("first-name");
const usernameQ = document.getElementById("q-1");

//first name

nameBtn.addEventListener("click", function (e) {
  if (firstName.value != "") {
    question[0].classList.add("hidden");
    question[1].classList.remove("hidden");
    userInfoInput.push(firstName.value);
    localStorage.setItem("Username", firstName.value);
  }
  e.preventDefault();
});

//birthdate

const birthdateBtn = document.getElementById("date-btn");
let birthday = document.getElementById("birthday");
const birthdayQ = document.getElementById("q-2");

birthdateBtn.addEventListener("click", (e) => {
  if (birthday.value <= birthday.ariaValueMax) {
    question[1].classList.add("hidden");
    question[2].classList.remove("hidden");
    userInfoInput.push(birthday.value);
  }
  e.preventDefault();
});

//email

const emailBtn = document.getElementById("email-btn");
let email = document.getElementById("email");

emailBtn.addEventListener("click", (e) => {
  if (email.value != "") {
    question[2].classList.add("hidden");
    question[3].classList.remove("hidden");
    userInfoInput.push(email.value);
  }
  e.preventDefault();
});

//password

const passwordBtn = document.getElementById("password-btn");
let password = document.getElementById("password");

passwordBtn.addEventListener("click", (e) => {
  if (password.value >= password.ariaValueMin) {
    question[3].classList.add("hidden");
    question[4].classList.remove("hidden");
    userInfoInput.push(password.value);
    localStorage.setItem("password", password.value);
  }
  e.preventDefault();
});

//dog name

const dogNameBtn = document.getElementById("dog-name-btn");
let dogName = document.getElementById("dog-name");

dogNameBtn.addEventListener("click", (e) => {
  if (dogName.value != "") {
    question[4].classList.add("hidden");
    question[5].classList.remove("hidden");
    userInfoInput.push(dogName.value);
  }
  e.preventDefault();
});

//dog age

const dogAgeBtn = document.getElementById("dog-age-btn");
let dogAge = document.getElementById("dog-age");

dogAgeBtn.addEventListener("click", (e) => {
  if (dogAge.value > 0) {
    question[5].classList.add("hidden");
    question[6].classList.remove("hidden");
    userInfoInput.push(dogAge.value);
  }
  e.preventDefault();
});

//dog gender

const dogGenderBtn = document.getElementById("dog-gender-btn");
const male = document.getElementById("male");
const female = document.getElementById("female");
const gender = document.getElementById("dog-gender");

dogGenderBtn.addEventListener("click", (e) => {
  if (true) {
    question[6].classList.add("hidden");
    question[7].classList.remove("hidden");
    userInfoInput.push(gender.value);
  }
  e.preventDefault();
});

// breed

const dogBreedBtn = document.getElementById("breed-btn");
let breed = document.getElementById("breed");
let size = document.getElementById("size");

dogBreedBtn.addEventListener("click", (e) => {
  if ((breed.value != "" && size.innerText === "small", "medium", "large")) {
    question[7].classList.add("hidden");
    question[8].classList.remove("hidden");
    userInfoInput.push(breed.value);
    userInfoInput.push(size.value);
  }
  e.preventDefault();
});

//Mood

const dogMoodBtn = document.getElementById("mood-btn");
let mood = document.getElementById("mood");
let motivation = document.getElementById("motivation");

dogMoodBtn.addEventListener("click", (e) => {
  if (true) {
    question[8].classList.add("hidden");
    question[9].classList.remove("hidden");
    userInfoInput.push(mood.value);
    userInfoInput.push(motivation.value);
  }

  e.preventDefault();
});

//bio

const dogBioBtn = document.getElementById("bio-btn");
const bio = document.getElementById("bio-input");

dogBioBtn.addEventListener("click", (e) => {
  const paw = document.querySelector(".loading-container");
  if (true) {
    question[9].classList.add("hidden");
    question[10].classList.remove("hidden");
    userInfoInput.push(bio.value);
    localStorage.setItem("bio", bio.value);
    localStorage.setItem("localUser", JSON.stringify(userInfoInput));
  }
  setTimeout((e) => {
    paw.classList.add("hidden");
    location.href = "login.html";
  }, 5000);

  e.preventDefault();
});

//login menu button function

const loginMenuBtn1 = document.getElementById("login-menu-btn-1");
const loginMenuBtn2 = document.getElementById("login-menu-btn-2");
const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");
const createLogin = document.querySelector(".create-account-login-btn");

loginMenuBtn1.addEventListener("click", (e) => {
  if (e) {
    home.classList.add("fadeout");
    setTimeout(() => {
      home.classList.add("hidden");
      loginContainer.classList.remove("hidden");
      loginContainer.classList.add("fadein");
    }, 500);
  }
});

loginMenuBtn2.addEventListener("click", (e) => {
  if (e) {
    home.classList.add("fadeout");
    setTimeout(() => {
      home.classList.add("hidden");
      loginContainer.classList.remove("hidden");
      loginContainer.classList.add("fadein");
    }, 500);
  }
});
createLogin.addEventListener("click", (e) => {
  loginContainer.classList.remove("hidden");
  loginContainer.classList.add("fadein");
});

userInfoInput = [];
userInfo = JSON.parse(localStorage.getItem("localUser"));

//login functions

loginBtn.addEventListener("click", (e) => {
  const incorectLogin = document.querySelector(".incorrect-login");
  let usernameCorrect = document.getElementById("login-username");
  let passwordCorrect = document.getElementById("login-password");

  if (
    usernameCorrect.value == siteWideUsername &&
    passwordCorrect.value == siteWidePassword
  ) {
    window.location.href = "dashboard.html";
    alert("You Have Succesfully Logged In");
    localStorage.setItem(
      "CurrentAccount",
      JSON.stringify(usernameCorrect.value)
    );
  } else {
    incorectLogin.classList.remove("hidden");
  }
  e.preventDefault();
});

const loggedIn = JSON.parse(localStorage.getItem("CurrentAccount"));
const notLoggedIn = !loggedIn;

// not logged in

if (notLoggedIn) {
  menuUsername.innerText = "login";
}

// logged in

if (loggedIn) {
  menuUsername.innerText = siteWideUsername;
}
// console.log(userInfo[0]);
