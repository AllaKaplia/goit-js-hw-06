const inputText = document.querySelector('input#validation-input');

inputText.addEventListener("blur", function() {
  const length = Number(inputText.dataset.length);
  const textLength = inputText.value.length;

  if (textLength === length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});