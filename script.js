const API_URL = 'https://projeto-backend-1-r6l2.onrender.com';

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

document.getElementById('registerForm').addEventListener('submit', register);

document.getElementById('loginForm')?.addEventListener('submit', login);

function register(event) {
  event.preventDefault();

  fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    }),
  })
    .then((r) => r.json())
    .then((d) => alert(d.message));
}

function login(event) {
  event.preventDefault();

  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  })
    .then((r) => r.json())
    .then((d) => alert(d.message));
}
