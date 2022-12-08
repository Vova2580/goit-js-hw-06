const inputValidation = document.querySelector("#validation-input");


function onInputBlur(event) {

    let validLength = inputValidation.getAttribute("data-length");
    if (
      validLength > event.currentTarget.value.length
    ) {
      inputValidation.classList.remove("valid");
      inputValidation.classList.add("invalid");
    } else {
      inputValidation.classList.remove("invalid");
      inputValidation.classList.add("valid");
    }

}

inputValidation.addEventListener("blur", onInputBlur);