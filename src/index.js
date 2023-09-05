let display = document.getElementById('display').firstElementChild
let buttons = document.getElementById('buttons')
let equals = document.getElementById('equals')

buttons.addEventListener('click', (event) => {
  if (event.target.textContent !== '=') {
    display.innerText += event.target.textContent
  }
})

equals.addEventListener('click', sum(display.textContent))

function sum (input) {
  for (let index = 0; index < input.length; index++) {
    console.log(input[index])    
  }
}

// for (let index = 0; index < buttons.length; index++) {
//   buttons[index].addEventListener('click', print(buttons[index]))
// }