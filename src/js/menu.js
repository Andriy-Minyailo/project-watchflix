
(() => {
  const menu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);


  function toggleMenu() {
    menu.classList.toggle('visually-hidden');
  }
  
});

// ---------------------------------

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("header-menu").addEventListener("click", function() {
//     document.querySelector("header-menu").classList.toggle("open")
//   })
// })