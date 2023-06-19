const fontSizeControlEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSizeControlEl.addEventListener('input', () => {
    const fontSize = fontSizeControlEl.value + 'px';
    spanEl.style.fontSize = fontSize;
})

function onClick() {

}
