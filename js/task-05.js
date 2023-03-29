const refs = {
    input: document.querySelector('input#name-input'),
    nameLabel: document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(userName) {
    const userNameTrim = userName.currentTarget.value.trim();
    console.log(userNameTrim);
    if (userNameTrim === "") {
        refs.nameLabel.textContent = "Anonymous";
    } else {
        refs.nameLabel.textContent = userNameTrim;
    }
}