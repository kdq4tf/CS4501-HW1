const passwordInput = document.querySelector(".password-box input"),
    rangeInput = document.querySelector(".range-box input"),
    sliderNumber = document.querySelector(".range-box .slider-number"),
    generateButton = document.querySelector(".generate-button");

//Characters of alphabet(a-z/A-Z), numbers(0-9) and Symbols($%&[]...)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

//this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = () => {
    let newPassword = "";

    //for loop will run till rangeInput value
    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];
    }
    passwordInput.value = newPassword;
};

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

generatePassword();
generateButton.addEventListener("click", generatePassword);