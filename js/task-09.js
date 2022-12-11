function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector(".change-color");

const colorInfo = document.querySelector(".color");


changeBtn.addEventListener("click", colorChange);

function colorChange(event) {

  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;

  colorInfo.textContent = randomColor;
}

