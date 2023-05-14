function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

btnColor.addEventListener("click", () => {
  textColor.textContent = getRandomHexColor();
  bodyElement.style.backgroundColor = getRandomHexColor();
})