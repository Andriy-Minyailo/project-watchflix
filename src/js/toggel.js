const toggleThemeBtn = document.getElementById('toggel-btn')
const toggleThemeImage = document.getElementById('toggel-svg')

toggleThemeBtn.addEventListener('click', () => {
   if (document.body.classList.contains('light')) {
   document.body.classList.remove('light')
   toggleThemeImage.use ='./svg/symbol-defs.svg#icon-sun'
   localStorage.theme = 'dark'
   } else {
   document.body.classList.add('light')
   toggleThemeImage.use ='./svg/symbol-defs.svg#icon-moon'
   localStorage.theme = 'light'
   }
})

if(localStorage.theme === 'light') {
   document.body.classList.add('light')
   toggleThemeImage.use ='./svg/symbol-defs.svg#icon-moon'
}


