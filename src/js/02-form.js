const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formState = {
  email: '',
  message: '',
};

const savedState = localStorage.getItem(STORAGE_KEY);

if (savedState) {
  const parsedState = JSON.parse(savedState);

  
  if (parsedState.email) {
    formEl.elements.email.value = parsedState.email.trim();
    formState.email = parsedState.email.trim();
  }

  if (parsedState.message) {
    formEl.elements.message.value = parsedState.message.trim();
    formState.message = parsedState.message.trim();
  }
}

formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  const field = evt.target.name;
  const val = evt.target.value.trim();

  formState[field] = val;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function handleSubmit(evt) {
  evt.preventDefault();

  const emailValue = formEl.elements.email.value.trim();
  const messageValue = formEl.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  const result = {
    email: emailValue,
    message: messageValue,
  };

  console.log(result);

  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();

  formState.email = '';
  formState.message = '';
}