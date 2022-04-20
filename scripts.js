let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber > 0) {
    currentNumberWrapper.style.color = 'green';
  } else if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'black';
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'black';
  }
}
