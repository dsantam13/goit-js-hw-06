function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    boxes.append(newBox);
    newBox.style.width = `${width}px`;
    newBox.style.height = `${height}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxElement = document.querySelectorAll(".box");
  boxElement.forEach(box => box.remove());
};

createBtn.addEventListener("click", () => {
  const newElements = controlsInput.valueAsNumber;
  if (newElements) {
    destroyBoxes();
  }
  createBoxes(newElements);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

