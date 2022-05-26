import throttle from 'lodash.throttle';

const KEY_LOCALSTORAGE = 'feedback-form-state';
const formData = {};
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInputArea, 1000));

textarea.addEventListener('input', throttle(onTextInputArea, 1000));
input.addEventListener('input', throttle(onTextInputArea, 1000));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('KEY_LOCALSTORAGE');
  if (!formData[input.name] || !formData[textarea.name]) {
    alert('Заповніть форму');
  } else {
    console.log(formData);
  }
}
function onTextInputArea(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('KEY_LOCALSTORAGE', JSON.stringify(formData));
}

onExistTextarea();
function onExistTextarea() {
  const parsedSettings = JSON.parse(localStorage.getItem('KEY_LOCALSTORAGE'));
  if (parsedSettings) {
    input.value = parsedSettings.email;
    textarea.value = parsedSettings.message;
  }
}
