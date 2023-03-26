const refs = {
    input: document.querySelector('input#name-input'),
    nameLabel: document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(userName) {
    console.log(userName.currentTarget.value);
    
    if (userName.currentTarget.value === "") {
        refs.nameLabel.textContent = "Anonymous";
    } else {
        refs.nameLabel.textContent = userName.currentTarget.value.trim();
    }
}