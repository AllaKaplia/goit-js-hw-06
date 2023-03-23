const ulCategories = document.querySelectorAll(`ul#categories .item`);
let quantity = 0;
const total = ulCategories.forEach(function(category){
    quantity += 1;
});
console.log(`Number of categories:`, quantity);

const categories = document.querySelectorAll('.item'); 
console.log('Category:', categories[0].firstElementChild.textContent);

const category = categories[0].lastElementChild.children.length;
console.log('Elements:', category);

console.log('Category:', categories[1].firstElementChild.textContent);
const category1 = categories[1].lastElementChild.children.length;
console.log('Elements:', category1);

console.log('Category:', categories[2].firstElementChild.textContent);
const category2 = categories[2].lastElementChild.children.length;
console.log('Elements:', category2);
