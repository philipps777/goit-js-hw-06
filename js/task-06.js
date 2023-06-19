const  inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', borderColor)

function borderColor() {
    const inputValidEl = Number(inputEl.dataset.length);    
    const inputInvalidEl = inputEl.value.length;

    if(inputInvalidEl === inputValidEl) {
        toggleClassEl("valid", "invalid");
    }else {
        toggleClassEl("invalid", "valid");
    }
}

function toggleClassEl(a, b) {
    inputEl.classList.remove(b);
    inputEl.classList.add(a);
}


