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
}

LightSwitcher.onclick = function () {
  
  document.body.classList.toggle('light');
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


