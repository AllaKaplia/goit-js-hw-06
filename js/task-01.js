const ulCategories = document.querySelectorAll(`ul#categories .item`);
let quantity = 0;
ulCategories.forEach(function(category){
    quantity += 1;
    console.log(`Category:`, category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
});
console.log(`Number of categories:`, quantity);
