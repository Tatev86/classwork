
const sendBotton = document.querySelector(button);

function validateEmail(email) {
    if (typeof email !== 'string'){
        return false;
    }
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        return false;
    }
    const atDot = email.indexOf('.');
    if (atDot === -1) {
        return false;
    }
    if (atIndex === 0 && atDot === 0) {
        return false
    }
    
} 

function validatePass(pass) {
    if (typeof pass !== 'string') {
        return false
    }
    if (pass.length >= 5) {
        return flase
    }
}
if (!validateEmail) {
    errorMessage.innerHTML = 'Input is not valid';
        errorMessage.style.display = 'block';
}
else {
    errorMessage.style.display = 'none';
}

sendBotton.addEventListener('click', () => {
const email = document.querySelector(email).value;
const pass = document.querySelector(password).value
console.log (email, pass)
 });