const rangeElement = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

rangeElement.addEventListener("input", (e) => {
    const valueRange = e.currentTarget.value;
    spanText.style.fontSize = `${valueRange}px`;
})