
const  input =  document.querySelector('#validation-input');

input.addEventListener('blur',onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value === 'hello') {
        
        input.classList.remove('invalid');
        return input.classList.add('valid');
    };

    input.classList.remove('valid');
    return input.classList.add('invalid');

};