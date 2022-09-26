const addBook = document.querySelector('#add-book');
const formBook = document.querySelector('#form-book');
const judul = document.querySelector('#judul');
const penulis = document.querySelector('#penulis');
const tahun = document.querySelector('#tahun');

function addBooks(){
   formBook.classList.remove('hidden');
}

addBook.addEventListener('click', addBooks);