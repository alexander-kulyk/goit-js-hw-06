
// const changeColorBtn = document.querySelector(".change-color");
// const container = document.querySelector ('.widget');
// const spanColor = document.querySelector(".color");

const refs = {
body: document.querySelector("body"),
changeColorBtn: document.querySelector(".change-color"),
container: document.querySelector ('.widget'),
spanColor: document.querySelector(".color"),
};


refs.changeColorBtn.addEventListener('click',changeColorBack);

function changeColorBack(event) {

  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.body.style.backgroundColor;
  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

