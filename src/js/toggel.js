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

// Отримати URL поточної сторінки
var currentUrl = window.location.href;

// Отримати всі елементи посилань у списку
var navLinks = document.querySelectorAll('.header__nav-link, .mobile-menu__link');

// Пройтись по кожному елементу посилання
navLinks.forEach(function(link) {
  // Перевірити, чи співпадає URL посилання з поточним URL
  if (link.href === currentUrl) {
    // Додати клас до елементу посилання
    link.classList.add('link__current');
  }
});