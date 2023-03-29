function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('div#boxes');

createBtn.addEventListener('click', () => {
  const amountValue = Number(amount.value);
  createBoxes(amountValue);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxContainer = document.getElementById('boxes');
  let width = 30;
  let height = 30;
  
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.classList.add('boxes_styles')
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
      
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const container = document.getElementById("boxes");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}