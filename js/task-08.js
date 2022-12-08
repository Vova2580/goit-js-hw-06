const form = document.querySelector(".login-form");

const mailInput = document.querySelector(".email");

const passwordInput = document.querySelector(".password");

const submitBtn = document.querySelector(".submit");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {elements: { password, email }} = event.currentTarget;

    if (password.value === "" || email.value  === "") {
        return console.log("Заоавніть усі поля!!!");
    } else {
        return console.log(`Пошта користувача: ${email.value},.Пароль користувача: ${password.value}`);
    }
    
    event.currentTarget.reset();

}



