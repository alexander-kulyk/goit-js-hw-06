

const itemEl = document.querySelectorAll('#categories .item');

console.log('Number of categories:',itemEl.length);

itemEl.forEach(element =>{
    
    console.log('Category:',element.firstElementChild.innerHTML);
    console.log("Elements:", element.lastElementChild.children.length)
});



