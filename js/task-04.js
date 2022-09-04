

// const counter = document.querySelector('#counter');
// const valueEl = document.querySelector('.value');
// const  btnDecrement  =  document.querySelector('button[data-action="decrement"]');
// const  btnIncrement = document.querySelector('button[data-action="increment"]');

const refs ={
     counter: document.querySelector('#counter'),
     valueEl: document.querySelector('#value'),
     btnDecrement:   document.querySelector('button[data-action="decrement"]'),
     btnIncrement: document.querySelector('button[data-action="increment"]'),

};

let counterValue = null;

refs.btnDecrement.addEventListener('click', onDecrementBtnClick);
refs.btnIncrement.addEventListener('click',onIncrementBtnClick);

function onDecrementBtnClick(event) {
     // console.log(event.currentTarget);
     counterValue -= 1
     // console.log(counterValue);
     refs.valueEl.textContent = counterValue;   
};

function onIncrementBtnClick(event) {
     // console.log(event.currentTarget);
     counterValue +=1
     // console.log(counterValue);
     refs.valueEl.textContent = counterValue;
}




