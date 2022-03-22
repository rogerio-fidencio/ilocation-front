const form = document.querySelector('.login-form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const eyeIcon = document.querySelector('.eye-icon');
const btnLogin = document.querySelector('.btn-login');

function togglePassword() {
  if (password.type === 'password') {
    eyeIcon.src = './assets/view.png';
    password.type = 'text';
  }
  else {
    eyeIcon.src = './assets/hide.png';
    password.type = 'password';
  }
}
function submitData(email, password) {
  // fetch("endpoint de autenticacao").then(promise => {
  //   promise.json.then(response => {

  //   });
  // });
}

eyeIcon.addEventListener('click', togglePassword);
btnLogin.addEventListener('submit', e => {
  window.location.href = "./pedidos.html";
  e.preventDefault();
  e.stopPropagation();
});