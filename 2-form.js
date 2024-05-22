let formData = { email: "", message: "" };


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


function save_s() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function load_s() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}


function handle_input(event) {
  formData[event.target.name] = event.target.value.trim();
  save_s();
}


function handle_submit(event) {
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

window.addEventListener('DOMContentLoaded', load_s);

form.addEventListener('input', handle_input);
form.addEventListener('submit', handle_submit);