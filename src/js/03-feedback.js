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

  if (!formData[input.name] || !formData[textarea.name]) {
    alert('Заповніть форму');
  } else {
    console.log(formData);
    event.currentTarget.reset();
      localStorage.removeItem('KEY_LOCALSTORAGE');
      formData[input.name] = '';
    formData[textarea.name] = '';
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
    if (parsedSettings.email) {
      input.value = parsedSettings.email;
      formData[input.name] = parsedSettings.email;
    }
    if (parsedSettings.message) {
      textarea.value = parsedSettings.message;
      formData[textarea.name] = parsedSettings.message;
    }
  }
}
