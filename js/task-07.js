const inputEl = document.querySelector("#font-size-control");

const fieldToChange = document.querySelector("#text");

inputEl.addEventListener("input", inputResizing);

function inputResizing(event) {
    
    fieldToChange.style.fontSize = event.currentTarget.value + "px";
    
}
