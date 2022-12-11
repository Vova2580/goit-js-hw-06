
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");


inputName.addEventListener("input", onInputChange);

function onInputChange() {
    if (inputName.value === "") {

        outputName.innerHTML = "Anonymous";
        
    }
    else {

        outputName.innerHTML = inputName.value;

    }
}

