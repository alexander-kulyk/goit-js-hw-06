const  input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input',onInputTextSize);

text.style.fontSize  = `${input.value}px`;

function onInputTextSize(event) {
    text.style.fontSize  = `${input.value}px`;
};