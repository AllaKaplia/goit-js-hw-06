const inputText = document.querySelector('input#validation-input');

inputText.addEventListener("blur", function() {
  const length = Number(inputText.dataset.length);
  const trimmedInput = inputText.value.trim();
  const textLength = trimmedInput.length;
  console.log(textLength);

  if (textLength === length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});