const nameInputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output')


nameInputEl.addEventListener('input', (event)=> {
    const enteredName = event.currentTarget.value;
    spanEl.textContent = enteredName ? enteredName : 'Anonymous';
      
})
