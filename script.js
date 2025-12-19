const API_URL = 'https://projeto-backend-1-r6l2.onrender.com/';

function register() {
  fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((r) => r.json())
    .then((d) => alert(d.message));
}

function login() {
  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((r) => r.json())
    .then((d) => alert(d.message));
}
