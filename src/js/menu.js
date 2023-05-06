// (() => {
//   const menu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);


//   function toggleMenu() {
//     menu.classList.toggle('visually-hidden');
//   }
  
// })();

// ---------------------------------

const refs = {
  menuBtn: document.querySelector('[data-menu-open]'),
  menuContainer: document.querySelector('[data-menu]'),
  menuBackdrop: document.querySelector('[data-backdrop]'),
  body: document.querySelector('body'),
};

refs.menuBtn.addEventListener('click', toggleModal);

refs.menuBackdrop.addEventListener('click', closeOnBackdropClick);

function closeOnBackdropClick(e) {
  if (e.target === refs.menuBackdrop) {
    toggleModal();
  }
}

function toggleModal() {
  refs.menuBackdrop.classList.toggle('visually-hidden');
  refs.menuContainer.classList.toggle('is-open');
  refs.body.classList.toggle('is-open');
}