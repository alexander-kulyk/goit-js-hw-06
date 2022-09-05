const  input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input',onInputTextSize);
input.value = 16;

function onInputTextSize(event) {
    text.style.fontSize = input.value + 'px'
};