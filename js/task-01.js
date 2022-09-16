

const itemEl = document.querySelectorAll('#categories .item');

console.log('Number of categories:',[...itemEl].length);

[...itemEl].map(element =>{
    
    console.log('Category:',element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
});



