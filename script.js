//login
const form = document.querySelector('.login-form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const eyeIcon = document.querySelector('.eye-icon');
const btnLogin = document.querySelector('.btn-login');

//orders
const orders = document.querySelectorAll('tbody tr');
const modal = document.querySelector('.order-modal');
const modalContent = document.querySelector('.modal-content');
const titleModal = document.querySelector('.modal content h1')
//const titlesOrder = document.querySelectorAll('td a');

//tracking
const clientOrder = document.querySelector('.client-order');
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
function showModal(e) {
  //window.location.href = "../tracking/tracking.html";
  titleModal.textContent = `Pedido nº ${e.target.id}`
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}

//tracking
// function fillHeader(e) {
//   clientOrder.textContent = `${e.target.textContent}`
// }

//login
eyeIcon.addEventListener('click', togglePassword);
btnLogin.addEventListener('submit', e => {
  window.location.href = "../orders/orders.html";
  e.preventDefault();
  e.stopPropagation();
});

//order
orders.forEach(order => order.addEventListener('click', e => showModal(e)));
modal.addEventListener('click', closeModal);
modalContent.addEventListener('click', e => e.stopPropagation());
//titlesOrder.forEach(title => title.addEventListener('click', e => fillHeader(e)));