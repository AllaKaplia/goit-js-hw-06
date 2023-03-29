const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if(email === '' || password === ''){
       return alert('Please fill in this field!');
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);
    event.currentTarget.reset();
}