const inputValidation = document.querySelector("#validation-input");


function onInputBlur(event) {

  let validLength = Number(inputValidation.getAttribute(("data-length")));
  
  if (event.currentTarget.value.length === validLength) {
      
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
    
  }
  else {
    
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
    }
}

inputValidation.addEventListener("blur", onInputBlur);
