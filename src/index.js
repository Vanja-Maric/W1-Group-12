let display = document.getElementById('display').firstElementChild
let buttons = document.getElementById('buttons')
let equals = document.getElementById('equals')

buttons.addEventListener('click', (event) => {
  if (event.target.textContent !== '=') {
    display.innerText += event.target.textContent
  }
})

equals.addEventListener('click', (event) => {
  if (event.target.textContent === '=') {
    sum(display.textContent)
  }
} )

function sum (input) {
  for (let index = 0; index < input.length; index++) {
    if (input[index] === '+') {
      let numberOne = input.substring(0, index)
      let numberTwo = input.substring(index + 1, input.length)
      console.log(Number.parseInt(numberOne) + Number.parseInt(numberTwo))
    }   
  }
}

// for (let index = 0; index < buttons.length; index++) {
//   buttons[index].addEventListener('click', print(buttons[index]))
// }