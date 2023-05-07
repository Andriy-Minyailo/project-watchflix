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
const toggleThemeBtn = document.getElementById('toggle-btn');
const toggleThemeImage = document.querySelectorAll('.icon-sun_button use, .icon-sun_moon use');

toggleThemeBtn.addEventListener('click', () => {
  if (toggleThemeBtn.classList.contains('dark')) {
    toggleThemeBtn.classList.remove('dark');
    toggleThemeImage.forEach((icon) => {
      icon.setAttribute('href', './svg/symbol-defs.svg#icon-sun_moon');
    });
    localStorage.theme = 'light';
  } else {
    toggleThemeBtn.classList.add('dark');
    toggleThemeImage.forEach((icon) => {
      icon.setAttribute('href', './svg/symbol-defs.svg#icon-sun_button');
    });
    localStorage.theme = 'dark';
  }
});

if (localStorage.theme === 'dark') {
  toggleThemeBtn.classList.add('dark');
  toggleThemeImage.forEach((icon) => {
    icon.setAttribute('href', './svg/symbol-defs.svg#icon-sun_button');
  });
}


