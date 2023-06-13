const loggedIn = JSON.parse(localStorage.getItem("CurrentAccount"));
let menuUsername = document.querySelector(".menu-username");
const notLoggedIn = !loggedIn;
const profilePicture = document.querySelector(".profile-picture");
const pawIcon = document.getElementById("paw");
const matchUserDogName = document.getElementById("match-user-dog-name");
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

//Messages sub-menu elements

const messageDashboard = document.getElementById("message-dashboard");
const createMessagePage = document.getElementById("create-message");
const selectedUserMessagePage = document.getElementById(
  "selected-user-message"
);
const allMessagePages = document.querySelectorAll(".message-container-style");
const backMessageBtn = document.getElementById("back-btn");
const createMessageBtn = document.getElementById("create-message-btn");
const messageToSelectedBtn = document.getElementById("message-to-match-1");

//send message elements

const messageInput = document.querySelector(".message-input");
const messageSendBtn = document.querySelector(".message-send-btn");
const newSentMessageStyle = document.querySelector(".new-sent-message");
const messageBodyContainer = document.querySelector(".message-body-container");

//message send sync

const messagingUsername = document.querySelector(".messaging-username");
const newMessageContainer = document.getElementById("create-message-selection");
const newMessageBase = document.createElement("div");
const newMessageUserContainer = document.createElement("div");
const newMessageUserImg = document.createElement("img");
const newMessageUsername = document.createElement("h2");

userInfo = JSON.parse(localStorage.getItem("localUser"));
const siteWideBio = localStorage.getItem("bio");
const siteWideUsername = localStorage.getItem("Username");
const siteWidePassword = localStorage.getItem("password");

const potentialMatchArr = [];
const matchArr = [
  {
    id: "1",
    dogName: "lucy",
    ownerName: "sarah",
    dogGender: "female",
    dogAge: "4",
    dogBreed: "golden retriever",
    dogSize: "medium",
    dogMood: "couch potato",
    dogMotivation: "toys",
    dogBio:
      "lucy is the best girl. she loves other dogs and cannot wait for a play-date",
  },
  {
    id: "2",
    dogName: "ryan",
    ownerName: "bill",
    dogGender: "male",
    dogAge: "8",
    dogBreed: "great dane",
    dogSize: "large",
    dogMood: "couch potato",
    dogMotivation: "food",
    dogBio:
      "ryan literally never wants to do anything. He is old and just wants a chill friend",
  },
  {
    id: "3",
    dogName: "bo",
    ownerName: "madison",
    dogGender: "male",
    dogAge: "7",
    dogBreed: "mut",
    dogSize: "large",
    dogMood: "hyper",
    dogMotivation: "food",
    dogBio:
      "bojangles loves other dogs and spends most of his time with his momma. He is friendly to everyone",
  },
  {
    id: "4",
    dogName: "koda",
    ownerName: "brad",
    dogGender: "male",
    dogAge: "10",
    dogBreed: "chocolate lab",
    dogSize: "large",
    dogMood: "couch potato",
    dogMotivation: "exercise",
    dogBio:
      "koda is a very sweet chocolate lab nearing the end of his life. He loves other dogs and just wants to hang out.",
  },
  {
    id: "5",
    dogName: "cooper",
    ownerName: "randy",
    dogGender: "male",
    dogAge: "6",
    dogBreed: "black lab",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "coopers favorite thing to do is go on walks. We will be in the area at a couple dog parks this week if anyone wants to meet up! Message me!",
  },
  {
    id: "6",
    dogName: "Bella",
    ownerName: "Michelle",
    dogGender: "female",
    dogAge: "4",
    dogBreed: "Golden Retriever",
    dogSize: "large",
    dogMood: "couch-potato",
    dogMotivation: "food",
    dogBio:
      "Bella loves lounging on the couch and enjoys treats. She's a calm and gentle companion.",
  },

  {
    id: "7",
    dogName: "Max",
    ownerName: "John",
    dogGender: "male",
    dogAge: "2",
    dogBreed: "Australian Shepherd",
    dogSize: "medium",
    dogMood: "mild",
    dogMotivation: "exercise",
    dogBio:
      "Max is a friendly and obedient dog. He enjoys going for runs and playing fetch.",
  },
  {
    id: "8",
    dogName: "Lucy",
    ownerName: "Emily",
    dogGender: "female",
    dogAge: "3",
    dogBreed: "Poodle",
    dogSize: "small",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Lucy is a playful and energetic dog. She loves playing with her favorite toys and going on adventures.",
  },
  {
    id: "9",
    dogName: "Charlie",
    ownerName: "Sarah",
    dogGender: "male",
    dogAge: "5",
    dogBreed: "Labrador Retriever",
    dogSize: "large",
    dogMood: "mild",
    dogMotivation: "exercise",
    dogBio:
      "Charlie is a gentle and well-behaved companion. He enjoys long walks and spending time outdoors.",
  },
  {
    id: "10",
    dogName: "Luna",
    ownerName: "Alex",
    dogGender: "female",
    dogAge: "1",
    dogBreed: "Husky",
    dogSize: "large",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Luna is a high-energy and playful Husky. She loves playing with her toys and exploring new places.",
  },
  {
    id: "11",
    dogName: "Rocky",
    ownerName: "David",
    dogGender: "male",
    dogAge: "4",
    dogBreed: "Bulldog",
    dogSize: "medium",
    dogMood: "couch-potato",
    dogMotivation: "food",
    dogBio:
      "Rocky is a laid-back and easygoing Bulldog. He enjoys lounging around and treats are his favorite.",
  },
  {
    id: "12",
    dogName: "Molly",
    ownerName: "Jessica",
    dogGender: "female",
    dogAge: "7",
    dogBreed: "Shih Tzu",
    dogSize: "small",
    dogMood: "mild",
    dogMotivation: "toys",
    dogBio: "Molly is a calm and affectionate dog",
  },
  {
    id: "13",
    dogName: "Rex",
    ownerName: "Randy",
    dogGender: "male",
    dogAge: "6",
    dogBreed: "Black Lab",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Rex loves going on walks. We will be in the area at a couple dog parks this week if anyone wants to meet up! Message me!",
  },
  {
    id: "14",
    dogName: "Lola",
    ownerName: "Emily",
    dogGender: "female",
    dogAge: "4",
    dogBreed: "Golden Retriever",
    dogSize: "large",
    dogMood: "mild",
    dogMotivation: "food",
    dogBio:
      "Lola is a calm and gentle companion. She loves treats and enjoys a good meal.",
  },
  {
    id: "15",
    dogName: "Buddy",
    ownerName: "Mike",
    dogGender: "male",
    dogAge: "5",
    dogBreed: "German Shepherd",
    dogSize: "large",
    dogMood: "couch-potato",
    dogMotivation: "toys",
    dogBio:
      "Buddy is a laid-back dog who loves lounging around. He enjoys playing with toys when he's in the mood.",
  },
  {
    id: "16",
    dogName: "Daisy",
    ownerName: "Sophia",
    dogGender: "female",
    dogAge: "3",
    dogBreed: "Dalmatian",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "exercise",
    dogBio:
      "Daisy is a high-energy dog who needs plenty of exercise. She's always ready for an active playtime!",
  },
  {
    id: "17",
    dogName: "Bailey",
    ownerName: "David",
    dogGender: "male",
    dogAge: "2",
    dogBreed: "Poodle",
    dogSize: "small",
    dogMood: "mild",
    dogMotivation: "toys",
    dogBio:
      "Bailey is a gentle and friendly pup. He loves playing with his favorite toys.",
  },
  {
    id: "18",
    dogName: "Milo",
    ownerName: "Emma",
    dogGender: "male",
    dogAge: "7",
    dogBreed: "Labrador Retriever",
    dogSize: "large",
    dogMood: "couch-potato",
    dogMotivation: "food",
    dogBio:
      "Milo is a relaxed dog who enjoys lounging on the couch. Treats are his ultimate motivation.",
  },
  {
    id: "19",
    dogName: "Rocky",
    ownerName: "Josh",
    dogGender: "male",
    dogAge: "4",
    dogBreed: "Bulldog",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Rocky is an energetic and playful bulldog. He's always up for a game of fetch with his favorite toys.",
  },
  {
    id: "20",
    dogName: "Sadie",
    ownerName: "Olivia",
    dogGender: "female",
    dogAge: "6",
    dogBreed: "Siberian Husky",
    dogSize: "large",
    dogMood: "mild",
    dogMotivation: "exercise",
    dogBio: "Sadie is a happy-go-lucky",
  },
  {
    id: "21",
    dogName: "Baxter",
    ownerName: "Mark",
    dogGender: "male",
    dogAge: "6",
    dogBreed: "Labrador Retriever",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Baxter loves going on walks. We will be in the area at a couple dog parks this week if anyone wants to meet up! Message me!",
  },
  {
    id: "22",
    dogName: "Coco",
    ownerName: "Sophie",
    dogGender: "female",
    dogAge: "4",
    dogBreed: "Australian Shepherd",
    dogSize: "medium",
    dogMood: "mild",
    dogMotivation: "food",
    dogBio:
      "Coco is a calm and friendly companion. She enjoys delicious treats and a good meal.",
  },
  {
    id: "23",
    dogName: "Maximus",
    ownerName: "Jacob",
    dogGender: "male",
    dogAge: "5",
    dogBreed: "Rottweiler",
    dogSize: "large",
    dogMood: "couch-potato",
    dogMotivation: "toys",
    dogBio:
      "Maximus is a relaxed and easygoing dog. He enjoys playing with his favorite toys at his own pace.",
  },
  {
    id: "24",
    dogName: "Luna",
    ownerName: "Oliver",
    dogGender: "female",
    dogAge: "3",
    dogBreed: "Husky",
    dogSize: "large",
    dogMood: "hyper",
    dogMotivation: "exercise",
    dogBio:
      "Luna is a high-energy dog who loves to run and play. She's always ready for an active adventure!",
  },
  {
    id: "25",
    dogName: "Leo",
    ownerName: "Ella",
    dogGender: "male",
    dogAge: "2",
    dogBreed: "Beagle",
    dogSize: "small",
    dogMood: "mild",
    dogMotivation: "toys",
    dogBio:
      "Leo is a friendly and playful pup. He enjoys chasing after his favorite toys and having a great time.",
  },
  {
    id: "26",
    dogName: "Maggie",
    ownerName: "William",
    dogGender: "female",
    dogAge: "7",
    dogBreed: "Boxer",
    dogSize: "large",
    dogMood: "couch-potato",
    dogMotivation: "food",
    dogBio:
      "Maggie is a laid-back and affectionate dog. She loves relaxing on the couch and enjoying tasty treats.",
  },
  {
    id: "27",
    dogName: "Oscar",
    ownerName: "Ava",
    dogGender: "male",
    dogAge: "4",
    dogBreed: "French Bulldog",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Oscar is an energetic and playful bulldog. He's always up for a game of fetch with his favorite toys.",
  },
  {
    id: "28",
    dogName: "Zoe",
    ownerName: "Mia",
    dogGender: "female",
    dogAge: "6",
    dogBreed: "Shiba Inu",
    dogSize: "medium",
    dogMood: "mild",
    dogMotivation: "exercise",
    dogBio: "Zoe is an active",
  },
  {
    id: "28",
    dogName: "Cooper",
    ownerName: "Emily",
    dogGender: "male",
    dogAge: "4",
    dogBreed: "Australian Cattle Dog",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Cooper is an energetic and intelligent Australian Cattle Dog. He loves playing with toys and participating in dog sports.",
  },
  {
    id: "29",
    dogName: "Daisy",
    ownerName: "Benjamin",
    dogGender: "female",
    dogAge: "3",
    dogBreed: "Shih Tzu",
    dogSize: "small",
    dogMood: "mild",
    dogMotivation: "food",
    dogBio:
      "Daisy is a sweet and affectionate Shih Tzu. She enjoys tasty treats and snuggling up with her owner.",
  },
  {
    id: "30",
    dogName: "Samson",
    ownerName: "Avery",
    dogGender: "male",
    dogAge: "5",
    dogBreed: "Bernese Mountain Dog",
    dogSize: "large",
    dogMood: "couch-potato",
    dogMotivation: "toys",
    dogBio:
      "Samson is a gentle and laid-back Bernese Mountain Dog. He loves lounging around and playing with his favorite toys.",
  },
  {
    id: "31",
    dogName: "Stella",
    ownerName: "Elijah",
    dogGender: "female",
    dogAge: "2",
    dogBreed: "Siberian Husky",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "exercise",
    dogBio:
      "Stella is a high-energy and adventurous Siberian Husky. She enjoys outdoor activities and going for long runs.",
  },
  {
    id: "32",
    dogName: "Baxter",
    ownerName: "Grace",
    dogGender: "male",
    dogAge: "3",
    dogBreed: "Boston Terrier",
    dogSize: "small",
    dogMood: "mild",
    dogMotivation: "toys",
    dogBio:
      "Baxter is a friendly and playful Boston Terrier. He loves playing with squeaky toys and meeting new friends at the park.",
  },
  {
    id: "33",
    dogName: "Lily",
    ownerName: "Henry",
    dogGender: "female",
    dogAge: "6",
    dogBreed: "Cocker Spaniel",
    dogSize: "medium",
    dogMood: "couch-potato",
    dogMotivation: "food",
    dogBio:
      "Lily is a calm and gentle Cocker Spaniel. She enjoys snuggling on the couch and savoring delicious treats.",
  },
  {
    id: "34",
    dogName: "Rocco",
    ownerName: "Scarlett",
    dogGender: "male",
    dogAge: "4",
    dogBreed: "Bulldog",
    dogSize: "medium",
    dogMood: "hyper",
    dogMotivation: "toys",
    dogBio:
      "Rocco is an energetic and playful Bulldog. He loves chasing balls and engaging in interactive play with his toys.",
  },
];
const successfulMatchesArr = [];
let matchCounter = 0;
let userNumber = 0;

//functions

//match counter

function matchCount() {
  matchCounter++;
  return matchCounter.toString();
}

//site-wide login detection

if (notLoggedIn) {
  menuUsername.innerText = "login";
}

if (loggedIn) {
  //menu bar text
  menuUsername.innerText = siteWideUsername;
  //profile picture & name in top bar
  profilePicture.classList.remove("hidden");
  pawIcon.remove(pawIcon);
}

//match menu

//match-menu-nav-function
const matchNavProfileBtn = document.getElementById("match-nav-profile-btn");
const matchNavMessagesBtn = document.getElementById("match-nav-messages-btn");
const matchNavMatchesBtn = document.getElementById("match-nav-matches-btn");
const matchNavSettingsBtn = document.getElementById("match-nav-settings-btn");
const matchMenuProfile = document.querySelector(".match-menu-profile");
const matchMenuMessages = document.querySelector(".match-menu-messages");
const matchMenuMatches = document.querySelector(".match-menu-matches");
const matchMenuSettings = document.querySelector(".match-menu-settings");
const allNavPages = document.querySelectorAll(".match-menu-content-style");
const allNavBtns = document.querySelectorAll(".navbar-icon-style");

matchNavProfileBtn.addEventListener("click", (e) => {
  if (e.target && matchMenuProfile.classList.contains("hidden")) {
    allNavPages.forEach((allNavPages) => {
      allNavPages.classList.add("hidden");
      matchMenuProfile.classList.remove("hidden");
    });

    allNavBtns.forEach((selected) => {
      selected.classList.remove("nav-selected");
      matchNavProfileBtn.classList.add("nav-selected");
    });
  }
});

matchNavMessagesBtn.addEventListener("click", (e) => {
  if (e.target && matchMenuMessages.classList.contains("hidden")) {
    allNavPages.forEach((allNavPages) => {
      allNavPages.classList.add("hidden");
      matchMenuMessages.classList.remove("hidden");
    });

    allNavBtns.forEach((selected) => {
      selected.classList.remove("nav-selected");
      matchNavMessagesBtn.classList.add("nav-selected");
    });
  }
});
matchNavMatchesBtn.addEventListener("click", (e) => {
  if (e.target && matchMenuMatches.classList.contains("hidden")) {
    allNavPages.forEach((allNavPages) => {
      allNavPages.classList.add("hidden");
      matchMenuMatches.classList.remove("hidden");
    });

    allNavBtns.forEach((selected) => {
      selected.classList.remove("nav-selected");
      matchNavMatchesBtn.classList.add("nav-selected");
    });
  }
});
matchNavSettingsBtn.addEventListener("click", (e) => {
  if (e.target && matchMenuSettings.classList.contains("hidden")) {
    allNavPages.forEach((allNavPages) => {
      allNavPages.classList.add("hidden");
      matchMenuSettings.classList.remove("hidden");
    });

    allNavBtns.forEach((selected) => {
      selected.classList.remove("nav-selected");
      matchNavSettingsBtn.classList.add("nav-selected");
    });
  }
});

//profile-card

const matchMenuDogName = document.getElementById("match-menu-profile-dog-name");
const matchMenuOwnerName = document.getElementById(
  "match-menu-profile-dog-owner"
);
const matchMenuDogGender = document.getElementById(
  "match-menu-profile-dog-gender"
);
const matchMenuDogAge = document.getElementById("match-menu-profile-dog-age");
const matchMenuDogBreed = document.getElementById(
  "match-menu-profile-dog-breed"
);
const matchMenuDogSize = document.getElementById("match-menu-profile-dog-size");
const matchMenuDogMood = document.getElementById("match-menu-profile-dog-mood");
const matchMenuDogMotivation = document.getElementById(
  "match-menu-profile-dog-motivation"
);
const matchMenuDogBio = document.getElementById("match-menu-profile-dog-bio");

matchMenuDogName.innerText = `${userInfo[4]}`;
matchMenuOwnerName.innerText = ` ${siteWideUsername}`;
matchMenuDogGender.innerText = `${userInfo[6]}`;
matchMenuDogAge.innerText = ` ${userInfo[5]}`;
matchMenuDogBreed.innerText = ` ${userInfo[7]}`;
matchMenuDogSize.innerText = ` ${userInfo[8]}`;
matchMenuDogMood.innerText = ` ${userInfo[9]}`;
matchMenuDogMotivation.innerText = ` ${userInfo[10]}`;
matchMenuDogBio.innerText = `${siteWideBio}`;

// Match card function

//starting card

cardDogName.innerText = `${matchArr[25].dogName}`;
cardOwnerName.innerText = ` ${matchArr[25].ownerName}`;
cardDogGender.innerText = `${matchArr[25].dogGender}`;
cardDogAge.innerText = ` ${matchArr[25].dogAge}`;
cardDogBreed.innerText = ` ${matchArr[25].dogBreed}`;
cardDogSize.innerText = ` ${matchArr[25].dogSize}`;
cardDogMood.innerText = ` ${matchArr[25].dogMood}`;
cardDogMotivation.innerText = ` ${matchArr[25].dogMotivation}`;
cardDogBio.innerText = `${matchArr[25].dogBio}`;

//potential match logic

// x-button

const xButton = document.getElementById("x-button");
let currentDogIndex = 0;

xButton.addEventListener("click", (e) => {
  let currentDog = matchArr[currentDogIndex % matchArr.length];
  currentDogIndex++;

  cardDogName.innerText = `${currentDog.dogName}`;
  cardOwnerName.innerText = ` ${currentDog.ownerName}`;
  cardDogGender.innerText = `${currentDog.dogGender}`;
  cardDogAge.innerText = ` ${currentDog.dogAge}`;
  cardDogBreed.innerText = ` ${currentDog.dogBreed}`;
  cardDogSize.innerText = ` ${currentDog.dogSize}`;
  cardDogMood.innerText = ` ${currentDog.dogMood}`;
  cardDogMotivation.innerText = ` ${currentDog.dogMotivation}`;
  cardDogBio.innerText = `${currentDog.dogBio}`;

  if (
    userInfo[9] === currentDog.dogMood &&
    userInfo[8] === currentDog.dogSize
  ) {
    potentialMatchArr.push(currentDog);
  } else if (potentialMatchArr.length >= 1 && e) {
    potentialMatchArr.pop();
  }
});

//check-button

const checkButton = document.getElementById("check-button");
let newMatch = true;

checkButton.addEventListener("click", (e) => {
  let currentDog = matchArr[currentDogIndex % matchArr.length];
  currentDogIndex++;

  cardDogName.innerText = `${currentDog.dogName}`;
  cardOwnerName.innerText = ` ${currentDog.ownerName}`;
  cardDogGender.innerText = `${currentDog.dogGender}`;
  cardDogAge.innerText = ` ${currentDog.dogAge}`;
  cardDogBreed.innerText = ` ${currentDog.dogBreed}`;
  cardDogSize.innerText = ` ${currentDog.dogSize}`;
  cardDogMood.innerText = ` ${currentDog.dogMood}`;
  cardDogMotivation.innerText = ` ${currentDog.dogMotivation}`;
  cardDogBio.innerText = `${currentDog.dogBio}`;

  // match

  if (
    userInfo[9] === currentDog.dogMood &&
    userInfo[8] === currentDog.dogSize
  ) {
    potentialMatchArr.push(currentDog);
  } else if (potentialMatchArr.length >= 1 && newMatch) {
    newMatch = false;
    alert("You got a match!");

    //registering match in count
    matchCount();
    const userNumber = matchCounter.toString();

    //setting to local storage
    localStorage.setItem(`matches`, JSON.stringify(potentialMatchArr));
    savedMatches = JSON.parse(localStorage.getItem("matches"));

    //setting match to recent matches

    const recentMatchContainer = document.querySelector(
      ".recent-match-container"
    );
    const newRecentMatch = document.createElement("div");
    const newRecentMatchImgContainer = document.createElement("div");
    const newRecentMatchUsername = document.createElement("h2");
    const newRecentMatchImg = document.createElement("img");

    function addToRecentMatches() {
      recentMatchContainer.append(newRecentMatch);
      newRecentMatch.classList.add("recent-match-style");
      newRecentMatch.append(newRecentMatchImgContainer);
      newRecentMatchImgContainer.classList.add("match-picture-container");
      newRecentMatchImgContainer.appendChild(newRecentMatchImg);
      newRecentMatchImg.classList.add("match-picture");
      newRecentMatchImg.src = "pawpalsimgs/pawpalsdog.png";
      newRecentMatchImgContainer.append(newRecentMatchUsername);
      newRecentMatchUsername.classList.add("recent-match-username");
      newRecentMatchUsername.appendChild(
        document.createTextNode(potentialMatchArr[0].dogName)
      );
    }
    addToRecentMatches();

    //setting match to new message

    const newRecentMatchImgContNew = document.createElement("div");

    function addToNewMessage() {
      newMessageContainer.append(newMessageBase);
      newMessageBase.classList.add("message-recent-matches");
      newMessageBase.append(newMessageUserContainer);
      newMessageUserContainer.classList.add("create-message-user-container");
      newMessageUserContainer.appendChild(newRecentMatchImgContNew);
      newRecentMatchImgContNew.classList.add("recent-match-img-container");
      newRecentMatchImgContNew.appendChild(newMessageUserImg);
      newMessageUserImg.src = "pawpalsimgs/pawpalsdog.png";
      newMessageUserImg.classList.add("recent-match-new-message-img");
      newMessageUserContainer.appendChild(newMessageUsername);
      newMessageUsername.classList.add("new-message-username");
      newMessageUsername.appendChild(
        document.createTextNode(potentialMatchArr[0].dogName)
      );
    }

    addToNewMessage();

    //storing user number
    newMessageUserContainer.setAttribute("id", `user` + userNumber);

    // integrating selection for messaging capability

    const userSelectability = document.getElementById(`user` + userNumber);
    userSelectability.addEventListener("click", (e) => {
      allMessagePages.forEach((allMessageSubMenus) => {
        allMessageSubMenus.classList.add("hidden");
        selectedUserMessagePage.classList.remove("hidden");
      });

      messagingUsername.innerText = newMessageUsername.textContent;
    });

    potentialMatchArr.pop();
  }
});

//Messages sub-menu function

createMessageBtn.addEventListener("click", (e) => {
  allMessagePages.forEach((allMessageSubMenus) => {
    allMessageSubMenus.classList.add("hidden");
    createMessagePage.classList.remove("hidden");
  });
});

backMessageBtn.addEventListener("click", (e) => {
  allMessagePages.forEach((allMessageSubMenus) => {
    allMessageSubMenus.classList.add("hidden");
    messageDashboard.classList.remove("hidden");
  });
});

messageToSelectedBtn.addEventListener("click", (e) => {
  allMessagePages.forEach((allMessageSubMenus) => {
    allMessageSubMenus.classList.add("hidden");
    selectedUserMessagePage.classList.remove("hidden");
  });
});

//send message function

messageSendBtn.addEventListener("click", (e) => {
  const newMessage = document.createElement("div");
  const newMessageAnchor = document.createElement("a");
  const newMessagePreview = document.createElement("div");
  const newMessagePreviewImgContainer = document.createElement("div");
  const newMessagePreviewImg = document.createElement("img");
  const messagePreviewUsername = document.createElement("h2");
  const newMessagePreviewContainer = document.createElement("div");
  const messagePreviewContent = document.createElement("h2");

  if (messageInput.value > "") {
    newMessage.appendChild(document.createTextNode(messageInput.value));
    messageBodyContainer.appendChild(newMessage);
    newMessage.classList.add("new-sent-message");
    messageDashboard.append(newMessageAnchor);
    newMessageAnchor.setAttribute("class", "new-message-anchor");
    newMessageAnchor.setAttribute("href", "#");
    newMessageAnchor.setAttribute("id", "dashboard-message-selection-btn");
    newMessageAnchor.append(newMessagePreview);
    newMessagePreview.setAttribute("class", "new-message");
    newMessagePreview.append(newMessagePreviewImgContainer);
    newMessagePreviewImgContainer.setAttribute(
      "class",
      "message-preview-img-container"
    );
    newMessagePreviewImgContainer.appendChild(newMessagePreviewImg);
    newMessagePreviewImg.setAttribute("class", "message-preview-picture");
    newMessagePreviewImg.src = "pawpalsimgs/pawpalsdog.png";
    newMessagePreview.appendChild(messagePreviewUsername);
    messagePreviewUsername.setAttribute("class", "message-username");
    messagePreviewUsername.appendChild(
      document.createTextNode(newMessageUsername.textContent)
    );
    newMessagePreview.append(newMessagePreviewContainer);
    newMessagePreviewContainer.setAttribute(
      "class",
      "message-preview-container"
    );
    newMessagePreviewContainer.appendChild(messagePreviewContent);
    messagePreviewContent.setAttribute("class", "message-preview-content");
    messagePreviewContent.appendChild(
      document.createTextNode(messageInput.value)
    );

    newMessagePreview.addEventListener("click", (e) => {
      allMessagePages.forEach((allMessageSubMenus) => {
        allMessageSubMenus.classList.add("hidden");
        selectedUserMessagePage.classList.remove("hidden");
      });
    });
  }
});

//settings menu navigation

const allSettingsPages = document.querySelectorAll(".settings-page-style");
const settingsBackButton = document.getElementById("settings-back-btn");
const changeUsernameButton = document.getElementById("change-username");
const changePasswordButton = document.getElementById("change-password");
const changeBioButton = document.getElementById("change-dog-bio");
const deleteAccountButton = document.getElementById("delete-account");
const settingsMenu = document.querySelector(".settings-menu");
const changeUsernamePage = document.querySelector(
  ".settings-change-username-page"
);
const changePasswordPage = document.querySelector(
  ".settings-change-password-page"
);
const changeBioPage = document.querySelector(".settings-change-bio-page");
const deleteAccountPage = document.querySelector(
  ".settings-delete-account-page"
);

settingsBackButton.addEventListener("click", (e) => {
  allSettingsPages.forEach((allSettingsSubMenus) => {
    allSettingsSubMenus.classList.add("hidden");
    settingsMenu.classList.remove("hidden");
    settingsBackButton.classList.add("hidden");
  });
});

changeUsernameButton.addEventListener("click", (e) => {
  allSettingsPages.forEach((allSettingsSubMenus) => {
    allSettingsSubMenus.classList.add("hidden");
    changeUsernamePage.classList.remove("hidden");
    settingsBackButton.classList.remove("hidden");
  });
});

changePasswordButton.addEventListener("click", (e) => {
  allSettingsPages.forEach((allSettingsSubMenus) => {
    allSettingsSubMenus.classList.add("hidden");
    changePasswordPage.classList.remove("hidden");
    settingsBackButton.classList.remove("hidden");
  });
});

changeBioButton.addEventListener("click", (e) => {
  allSettingsPages.forEach((allSettingsSubMenus) => {
    allSettingsSubMenus.classList.add("hidden");
    changeBioPage.classList.remove("hidden");
    settingsBackButton.classList.remove("hidden");
  });
});

deleteAccountButton.addEventListener("click", (e) => {
  allSettingsPages.forEach((allSettingsSubMenus) => {
    allSettingsSubMenus.classList.add("hidden");
    deleteAccountPage.classList.remove("hidden");
    settingsBackButton.classList.remove("hidden");
  });
});

//settings menu functionality

const currentUsername = document.querySelectorAll(".current-username");
const currentPassword = document.querySelectorAll(".current-password");
const currentBio = document.querySelectorAll(".current-bio");

currentUsername.forEach((displayedUsername) => {
  displayedUsername.textContent = siteWideUsername;
});
currentPassword.forEach((displayedUsername) => {
  displayedUsername.textContent = siteWidePassword;
});

currentBio.forEach((displayedUsername) => {
  displayedUsername.textContent = siteWideBio;
});

//changing username in localStorage

const newUsernameInput = document.getElementById("new-username-input");
const newUsernameConfirmBtn = document.getElementById("new-username-confirm");

newUsernameConfirmBtn.addEventListener("click", (e) => {
  localStorage.setItem("Username", newUsernameInput.value);
  alert("You have successfully changed your username");
  location.reload();
});

//changing password

const newPasswordInput = document.getElementById("new-password-input");
const newPasswordConfirmBtn = document.getElementById("new-password-confirm");

newPasswordConfirmBtn.addEventListener("click", (e) => {
  localStorage.setItem("password", newPasswordInput.value);
  alert("You have successfully changed your password");
  location.reload();
});

//changing bio

const newBioInput = document.getElementById("new-bio-input");
const newBioConfirmBtn = document.getElementById("new-bio-confirm");

newBioConfirmBtn.addEventListener("click", (e) => {
  localStorage.setItem("bio", newBioInput.value);
  alert("You have successfully changed your dog bio");
  location.reload();
});

//Deleting Account

const deleteAccountConfirmBtn = document.getElementById(
  "delete-account-confirm"
);
const deleteAccountDenyBtn = document.getElementById("delete-account-deny");

deleteAccountConfirmBtn.addEventListener("click", (e) => {
  localStorage.clear();
  location.href = "index.html";
});

deleteAccountDenyBtn.addEventListener("click", (e) => {
  alert("You made the right choice");
  location.reload();
});
