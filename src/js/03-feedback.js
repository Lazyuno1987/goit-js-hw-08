const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input',onTextInputArea)
input.addEventListener('input', onTextInputArea);
console.log(form.email)
console.log(form.message)

// console.log(form.elements.message.value)



function onFormSubmit(event) {
    event.preventDefault();
}

function onTextInputArea(event) {
const email =event.target.value
console.log(event.target.value)
    localStorage.setItem("feedback-form-state", email)
}