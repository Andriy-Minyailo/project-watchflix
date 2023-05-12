// const toggleThemeBtn = document.getElementById('toggel-btn')
// const toggleThemeImage = document.getElementById('toggel-svg')

// toggleThemeBtn.addEventListener('click', () => {
//    if (document.body.classList.contains('light')) {
//    document.body.classList.remove('light')
//    toggleThemeImage.use ='./svg/symbol-defs.svg#icon-sun'
//    localStorage.theme = 'dark'
//    } else {
//    document.body.classList.add('light')
//    toggleThemeImage.use ='./svg/symbol-defs.svg#icon-moon'
//    localStorage.theme = 'light'
//    }
// })

// if(localStorage.theme === 'light') {
//    document.body.classList.add('light')
//    toggleThemeImage.use ='./svg/symbol-defs.svg#icon-moon'
// }
// старый код выше

// пытался поставить новый код для лайт темы можешь попробовать он не переключает с темной темы на светлую 
//* S W I T C H  T H E M E

let LightSwitcher = document.querySelector('.switcher');
let isLight = localStorage.getItem('isLight');

if (isLight === 'true') {
  document.body.classList.add('light');
  document.querySelector('.mob-menu').classList.add('light');
  document.querySelector('.header-menu').classList.add('light');
  const headerLinks = document.querySelectorAll('.header-link');
  document.querySelector('.name').classList.add('light');
  headerLinks.forEach((link) => {
    link.classList.add('light');
  });

  const footerTexts = document.querySelectorAll('.footer-text');
  footerTexts.forEach((text) => {
    text.classList.add('light');
  });

  const footerTextSpans = document.querySelectorAll('.footer-text-span');
  footerTextSpans.forEach((span) => {
    span.classList.add('light');
  });

  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach((link) => {
    link.classList.add('light');
  });

  // Добавляем классы к переключению на светлую тему
  document.querySelector('.popup__content').classList.add('light');
  document.querySelector('.modal__info').classList.add('light');
  document.querySelector('.text-left').classList.add('light');
  document.querySelector('.add-to-my-library-black-btn-dark-theme').classList.add('light');
  document.querySelector('.modal-info__about').classList.add('light');
  
  const modalInfoLeftTextPopoparity = document.querySelectorAll('.modal-info-left__text-popoparity');
  modalInfoLeftTextPopoparity.forEach((element) => {
    element.classList.add('light');
  });

  const modalInfoLeftTextGenre = document.querySelectorAll('.modal-info-left__text-genre');
  modalInfoLeftTextGenre.forEach((element) => {
    element.classList.add('light');
  });

  const modalInfoAboutTextTitleAbout = document.querySelectorAll('.modal-info-about__text-title-about');
  modalInfoAboutTextTitleAbout.forEach((element) => {
    element.classList.add('light');
  });
}

LightSwitcher.onclick = function () {
  document.body.classList.toggle('light');
  document.querySelector('.mob-menu').classList.toggle('light');
  document.querySelector('.name').classList.toggle('light');
  document.querySelector('.header-menu').classList.toggle('light');
  
  const headerLinks = document.querySelectorAll('.header-link');
  headerLinks.forEach((link) => {
    link.classList.toggle('light');
  });

  const footerTexts = document.querySelectorAll('.footer-text');
  footerTexts.forEach((text) => {
    text.classList.toggle('light');
  });

  const footerTextSpans = document.querySelectorAll('.footer-text-span');
  footerTextSpans.forEach((span) => {
    span.classList.toggle('light');
  });

  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach((link) => {
    link.classList.toggle('light');
  });

  // Также добавляем классы к переключению на светлую тему
  document.querySelector('.popup__content').classList.toggle('light');
  document.querySelector('.modal__info').classList.toggle('light');
  document.querySelector('.text-left').classList.toggle('light');
  document.querySelector('.add-to-my-library-black-btn-dark-theme').classList.toggle('light');
  document.querySelector('.modal-info__about').classList.toggle('light');
  
  const modalInfoLeftTextPopoparity = document.querySelectorAll('.modal-info-left__text-popoparity');
modalInfoLeftTextPopoparity.forEach((element) => {
  element.classList.toggle('light');
});

const modalInfoLeftTextGenre = document.querySelectorAll('.modal-info-left__text-genre');
modalInfoLeftTextGenre.forEach((element) => {
  element.classList.toggle('light');
});

const modalInfoAboutTextTitleAbout = document.querySelectorAll('.modal-info-about__text-title-about');
modalInfoAboutTextTitleAbout.forEach((element) => {
  element.classList.toggle('light');
});

isLight = document.body.classList.contains('light');
localStorage.setItem('isLight', isLight);
};

//* C U R R E N T   P A G E

  // Получаем путь текущей страницы
  var path = window.location.pathname;

  // Находим ссылку в меню навигации, которая ведет на текущую страницу
  var currentLink = document.querySelector('.header-nav-item a[href="' + path + '"]');

  // Если такая ссылка есть, добавляем ей класс "current"
  if (currentLink) {
    currentLink.parentElement.classList.add('current');
  }


  const menuButton = document.getElementById('menu-button');
const menuContainer = document.querySelector('.mob-menu');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');

// открытие мобильного меню
menuButton.addEventListener('click', () => {
  menuContainer.style.left = '0';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
  overlay.style.visibility = 'visible';
  menuContainer.querySelectorAll('a').forEach(link => link.style.display = 'block');
});

// закрытие мобильного меню и скрытие overlay
overlay.addEventListener('click', () => {
  menuContainer.style.left = '-64%';
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
  overlay.style.visibility = 'hidden';
  menuContainer.querySelectorAll('a').forEach(link => link.style.display = 'none');
});


// header nav
// Получаем элемент хедера
let headerNav = document.querySelector('.header-nav');

// Функция для изменения цвета хедера
function toggleHeaderColor() {
  if (document.body.classList.contains('light')) {
    // Если текущая тема светлая, устанавливаем светлый цвет хедера
    headerNav.style.backgroundColor = '#fff';
    // Здесь вы можете добавить другие стили или классы по вашему выбору
  } else {
    // Если текущая тема темная, устанавливаем темный цвет хедера
    headerNav.style.backgroundColor = '#111111';
    // Здесь вы можете добавить другие стили или классы по вашему выбору
  }
}

// Вызываем функцию при загрузке страницы и при каждом переключении темы
window.addEventListener('load', toggleHeaderColor);
LightSwitcher.addEventListener('click', toggleHeaderColor);
