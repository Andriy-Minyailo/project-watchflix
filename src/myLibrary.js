import './js/modal';
import './js/toggel';


// при клике на кнопку переход на каталог 
const searchMovieBtn = document.getElementById("search-movie-btn");

searchMovieBtn.addEventListener("click", function() {
  window.location.replace("catalog.html");
});
