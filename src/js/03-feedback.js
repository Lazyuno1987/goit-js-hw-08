const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onTextInputArea);
textarea.addEventListener('input', onTextInputArea);
input.addEventListener('input', onTextInputArea);

const formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextInputArea(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

onExistTextarea();
function onExistTextarea() {
  const parsedSettings = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (parsedSettings) {
    input.value = parsedSettings.email;
    textarea.value = parsedSettings.message;
  }
}
