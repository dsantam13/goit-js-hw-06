let counterValue = 0;
console.log(counterValue);

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const textValue = document.querySelector('#value');

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    textValue.textContent = counterValue;
});

incBtn.addEventListener('click', () => {
    counterValue += 1;
    textValue.textContent = counterValue;
});