

const  input = document.querySelector('#name-input');
const titleSpan = document.querySelector('#name-output');

input.addEventListener('input',  onInputText );


function onInputText(event) {

    if (event.currentTarget.value === "") {
        return titleSpan.textContent = 'Anonymous'
    };

     return titleSpan.textContent = event.currentTarget.value;

    // console.log(event.currentTarget.value);
};



