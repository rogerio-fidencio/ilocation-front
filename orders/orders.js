const orders = document.querySelectorAll('tbody tr');
const modal = document.querySelector('.order-modal');
const modalContent = document.querySelector('.modal-content');
const titleModal = document.querySelector('.modal-content h1');
const btnModal = document.querySelector('.btn-tracking');

function showModal(e) {
  console.log(e.target);
  titleModal.textContent = `Pedido nº ${e.target.id}`;
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}

function redirectTracking() {
  window.location.href = "../final/final.html"
}

orders.forEach(order => order.addEventListener('click', e => showModal(e)));
modal.addEventListener('click', closeModal);
modalContent.addEventListener('click', e => e.stopPropagation());
btnModal.addEventListener('click', redirectTracking);