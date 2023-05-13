const inputElement = document.querySelector("input");
const numberSymbols = parseInt(inputElement.getAttribute("data-length"));



inputElement.addEventListener("blur", () => {
    if (inputElement.value.length !== numberSymbols) {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
        return;
    }
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
});