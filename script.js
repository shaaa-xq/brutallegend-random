const bl = [
  "Adoy",
  "Airynn",
  "Ajul",
  "Anna",
  "Awan",
  "Bolang",
  "Citem",
  "Damon",
  "Diablo",
  "Dio",
  "Edib",
  "Epin",
  "Evan",
  "Febfeb",
  "Fergan",
  "Fury",
  "Galon",
  "Garox",
  "Gempita",
  "Helen",
  "Hera",
  "Ikkan",
  "Jerry",
  "Kaguwir",
  "Kaira",
  "Kilwi",
  "Kirman",
  "Labra",
  "Maji",
  "Megi",
  "Megura",
  "Mokad",
  "Moon",
  "Narendra",
  "Noya",
  "Omend",
  "Reeze",
  "Riviel",
  "Roger",
  "Samir",
  "Sarah",
  "Sean",
  "Servalius",
  "Shadow",
  "Sova",
  "Tirta",
  "Ubi",
  "Voiz",
  "Wahcot",
  "Yama",
  "Zani",
];
const inputBtn = document.getElementById("input-btn");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");
const resultPage = document.getElementById("result-page");
const nameInput = document.getElementById("name-input").value;
const errorBox = document.getElementById("error");
const restartBtn = document.getElementById("restart-btn");
const characterNameCont = document.getElementById("charaname-box");
const imageCharacter = document.getElementById("image");

// random
const randomCharacter = () => {
  const randomName = Math.floor(Math.random() * bl.length);
  imageCharacter.setAttribute("src", "assets/" + "character/" + bl[randomName] + ".png");
  characterNameCont.textContent = bl[randomName];
};

const isClick = () => {
  loader.classList.remove("display-false");

  setTimeout(() => {
    loader.classList.add("display-false");
    mainContent.classList.add("display-false");
    resultPage.classList.remove("display-false");
    randomCharacter();
  }, 2000);
};

// restart
const restartGame = () => {
  resultPage.classList.add("display-false");
  mainContent.classList.remove("display-false");
};

inputBtn.addEventListener("click", isClick);
restartBtn.addEventListener("click", restartGame);
