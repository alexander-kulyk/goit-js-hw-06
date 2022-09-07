

const  input = document.querySelector('#name-input');
const titleSpan = document.querySelector('#name-output');

input.addEventListener('input',  onInputText );


function onInputText(event) {
    return event.currentTarget.value === "" 
    ?  titleSpan.textContent = 'Anonymous' 
    : titleSpan.textContent = event.currentTarget.value;

};



