const inputFontSizeControl = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');


inputFontSizeControl.addEventListener('input', function (params) {
    text.style.cssText = `font-size: ${params.target.value}px;`;
});