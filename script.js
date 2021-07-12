const form = document.getElementsByTagName('form')[0];
const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const emailInput = document.getElementsByTagName('input')[0];
const errorClass = 'error--active';
const pError = document.getElementsByClassName('error')[0];

const showError = message => {
    pError.innerHTML = message;
    pError.classList.add(errorClass);
    emailInput.classList.add(errorClass);
}

const handleSubmit = e => {
    e.preventDefault();

    if (emailInput.value.trim().length === 0) {
        const message = "Whoops! It looks like you forgot to add your email";
        showError( message );
    } else if ( !emailRegExp.test(emailInput.value) ) {
        const message = 'Please provide a valid email address';
        showError( message );
    } else {
        pError.classList.remove(errorClass);
        emailInput.classList.remove(errorClass);
        emailInput.value = '';
        pError.innerHTML = '';
    }
    
}

form.addEventListener('submit', handleSubmit);