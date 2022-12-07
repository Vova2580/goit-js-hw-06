const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (newUserName) => {
    outputName.textContent = newUserName.currentTarget.value;
})