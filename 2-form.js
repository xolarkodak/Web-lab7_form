let formData = { email: "", message: "" };


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}


function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
}


function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Заповніть, будь ласка, всі поля');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  form.reset();
}

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);