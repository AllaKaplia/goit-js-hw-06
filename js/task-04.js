const counterValue = {
    value: 0,
    decrement(){
        this.value -= 1;
    },
    increment(){
        this.value += 1;
    }
}

const buttons = document.querySelector('div#counter');
const valueEl = document.querySelector('span#value');
const decrementBtn = buttons.firstElementChild;
const incrementBtn = buttons.lastElementChild;


decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});