// const btnEl = document.querySelector('#alertButton')
// const btnEl = document.querySelector('#alertButton')
// const inputEl = document.querySelector('#alertInput')
// btnEl.addEventListener('click', onClick)

// function onClick () {
//     const value = inputEl.value
//     alert(value)
// }

// 2

// const leftInputEl = document.querySelector('#leftSwapInput')
// const rightInputEl = document.querySelector('#rightSwapInput')
// const swapBtnEl = document.querySelector('#swapButton')
// swapBtnEl.addEventListener('click', inputChanger)

// function inputChanger (){
//     const change = leftInputEl.value
//     leftInputEl.value = rightInputEl.value
//     rightInputEl.value = change
// }

// 22

// const leftInputEl = document.querySelector("#leftSwapInput");
// const rightInputEl = document.querySelector("#rightSwapInput");
// const swapBtnEl = document.querySelector("#swapButton");

// swapBtnEl.addEventListener("click", inputChanger);

// function inputChanger() {
//   const change = leftInputEl.value;
//   leftInputEl.value = rightInputEl.value;
//   rightInputEl.value = change;
// }

// function inputChanger() {
//   [leftInputEl.value, rightInputEl.value] = [
//     rightInputEl.value,
//     leftInputEl.value,
//   ];
// }

// 3

// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const passwordInputEl = document.querySelector('#passwordInput');
// const passwordButtonEl = document.querySelector('#passwordButton');

// passwordButtonEl.addEventListener('click', onClick)

// function onClick () {
//     if(passwordInputEl.type === 'password') {
//         passwordInputEl.type = 'text';
//         passwordButtonEl.textContent = 'Приховати'
//     }else {
//         passwordInputEl.type = 'password';   
//         passwordButtonEl.textContent = 'Розкрити'
//     }
// }

// function onClick (event) {
//     const bool = passwordInputEl.type === 'password';
//     passwordInputEl.type = bool ? 'text' : 'password' 
//     passwordButtonEl.textContent = bool ? 'Приховати' : 'Розкрити'
//     // event.target
//     console.log(event.target);
//     console.log(event.currentTarget);

// }

// 4

// //Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
// //фрагмент розмітки:
// // {
//     /* <div class="item"> 
//   <h3>Заголовок</h3>
//   <p>текст текст текст</p>
//   </div> */
// //   }
// //   {
//     /* <button class="add-btn">add</button>
//     <div class="container"></div> */
// //   }

// const btnEl = document.querySelector('.add-btn')
// const containerEl = document.querySelector('.container')

// btnEl.addEventListener('click', onClick)

// function onClick () {
//     const divEl = document.createElement('div')
//     const titleEl = document.createElement('h3')
//     const textEl = document.createElement('p')

//     divEl.classList.add('item')
//     titleEl.textContent = 'Заголовок'
//     textEl.textContent = 'lorem Ipsum'
//     divEl.append(titleEl, textEl)
//     containerEl.append(divEl)
// }

// function onClick() {
//     const markUp = `<div class="item"> 
//       <h3>Заголовок</h3>
//       <p>текст текст текст</p>
//       </div>`;
//       containerEl.innerHTML = markUp

// }

// 5

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

/* <style>
#box {
    width: 30px;
    height: 30px;
    background: red;
}
</style>

    <div>
        <div id="box"></div>
        <button id="decrease">Зменшити</button>
        <button id="increase">Збільшити</button>
    / </div> */


// const boxEl = document.querySelector('#box')
// const decreaseEl = document.querySelector('#decrease')
// const increaseEl = document.querySelector('#increase')

// let size = boxEl.clientWidth;


// decreaseEl.addEventListener('click', () =>{
//     size -= 10
//     updateBoxEl()
// })

// increaseEl.addEventListener('click', () =>{
//     size += 10
//     updateBoxEl()
// })


// function updateBoxEl () {
//     boxEl.style.width = size +'px'
//     boxEl.style.height = size +'px'
// }