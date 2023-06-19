const  btnDecr = document.querySelector("[data-action ='decrement']");
const  btnIncr = document.querySelector("[data-action ='increment']");
const spanValue = document.querySelector("#value");

let counterValue = 0;

btnDecr.addEventListener("click", ()=>{
    counterValue -= 1;
    updateCounter();
})
btnIncr.addEventListener("click", ()=>{
    counterValue += 1;
    updateCounter();
})

function updateCounter() {
    spanValue.textContent = counterValue

}
