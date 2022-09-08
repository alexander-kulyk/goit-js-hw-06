

const container = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');




createBtn.addEventListener('click',createBoxes);
destroyBtn.addEventListener('click',destroyBox);


function createBoxes() {
  const amount  = container.value;

  for (let i = 0,  boxSize = 30; i < amount; i++, boxSize += 10) {
    const createEl = document.createElement('div');
    createEl.style.width = `${boxSize}px`;
    createEl.style.height = `${boxSize}px`;
    createEl.style.backgroundColor = getRandomHexColor();
    
    boxes.append(createEl);
    container.value = '';
  };
  boxes.style.display = 'flex';
  boxes.style.gap = "5px";
  boxes.style.marginTop = "10px";
};


function destroyBox() {
  boxes.innerHTML='';
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// flex-wrap: wrap;