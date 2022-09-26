const addBook = document.querySelector('#add-book');
const formBook = document.querySelector('#form-book');
const judul = document.querySelector('#judul');
const penulis = document.querySelector('#penulis');
const tahun = document.querySelector('#tahun');
const btnCancel = document.querySelector('#btn-cancel');

function addBooks(){
   formBook.classList.remove('hidden');
}

function cancelBooks(){
   formBook.classList.add('hidden');
}

addBook.addEventListener('click', addBooks);
btnCancel.addEventListener('click', cancelBooks);