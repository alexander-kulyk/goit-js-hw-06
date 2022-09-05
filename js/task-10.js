

const container = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('.boxes');



createBtn.addEventListener('click',createBoxes);

function createBoxes(amount) {
  
};




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
