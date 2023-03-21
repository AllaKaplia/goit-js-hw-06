const quantityCategories = document.querySelectorAll(`ul#categories .item`);
let quantityTotal = 0;
const totalItems = quantityCategories.forEach(function(){
    return quantityTotal += 1;
});
console.log(`Number of categories:`, quantityTotal);

