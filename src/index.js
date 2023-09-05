let display = document.getElementById('display').firstElementChild
let numbers = document.getElementById('numbers').children
console.log(numbers)

for (let index = 0; index < numbers.length; index++) {
  numbers[index].addEventListener('click', print(numbers[index]))
}

function print (button) {
  console.log(button.innerText)
}