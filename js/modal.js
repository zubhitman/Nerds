let modalWindow = document.querySelector('.modal-write');
let openModalButton = document.querySelector('.contacts-button');
let closeModalButton = modalWindow.querySelector('.modal-close');

let modalUser = modalWindow.querySelector('.modal-user');
let modalEmail = modalWindow.querySelector('.modal-email');
let modalText = modalWindow.querySelector('.modal-Text-User');
let modalForm = modalWindow.querySelector('.modal-form');


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.classList.add('modal-show');

  if (storage) {
    modalUser.value = storage;
    modalEmail.focus();
  } else {
    modalUser.focus();
  }
});

closeModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove('modal-show');
  modalWindow.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function (evt) {
  if (!modalUser.value || !modalEmail.value || !modalText.value) {
  evt.preventDefault();
  modalWindow.classList.add('modal-error');
  modalWindow.classList.remove('modal-error');
  modalWindow.offsetWidth = modalWindow.offsetWidth;
  modalWindow.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('login', modalUser.value);
  }
}
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    if (modalWindow.classList.contains('modal-show')) {
      evt.preventDefault();
      modalWindow.classList.remove('modal-show');
      modalWindow.classList.remove('modal-error');
    }
  }
});
