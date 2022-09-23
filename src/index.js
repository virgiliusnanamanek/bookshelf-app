const buttonShowModal = document.querySelector('#showForm');
const formBuku = document.querySelector('#formBuku');
const buttonHideModal = document.querySelector('#buttonHideModal');

function showModal() {
  formBuku.classList.remove('hidden');
  buttonHideModal.classList.remove('flex');
  buttonHideModal.classList.add('hidden');
}

buttonShowModal.addEventListener('click', showModal);