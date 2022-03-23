//login
const form = document.querySelector('.login-form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const eyeIcon = document.querySelector('.eye-icon');
const btnLogin = document.querySelector('.btn-login');

//orders
const order = document.querySelector('.table tr');
const modal = document.querySelector('.order-modal');
const modalContent = document.querySelector('.modal-content');

//tracking
//final

//login
function togglePassword() {
  if (password.type === 'password') {
    eyeIcon.src = '../assets/view.png';
    password.type = 'text';
  }
  else {
    eyeIcon.src = '../assets/hide.png';
    password.type = 'password';
  }
}
function submitData(email, password) {
  // fetch("endpoint de autenticacao").then(promise => {
  //   promise.json.then(response => {

  //   });
  // });
}

//order
function showModal() {
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}

//login
eyeIcon.addEventListener('click', togglePassword);
btnLogin.addEventListener('submit', e => {
  window.location.href = "../orders/orders.html";
  e.preventDefault();
  e.stopPropagation();
});

//order
order.addEventListener('click', showModal);
modal.addEventListener('click', closeModal);
modalContent.addEventListener('click', e => e.stopPropagation());