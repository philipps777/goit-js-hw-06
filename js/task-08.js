const loginForm = document.querySelector('.login-form');
console.log(loginForm);

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();

    console.log(event.currentTarget.elements);

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if(!emailInput.value || !passwordInput.value) {
        return alert`Усі поля мають бути заповнені!`
       
    } else {

    const loginData = {
        email : emailInput.value,
        password: passwordInput.value
    }
    console.log(loginData);   
    loginForm.reset()
    }
}