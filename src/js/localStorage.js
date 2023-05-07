import { markup } from "./markup.js";
import { RequestServer } from "./requestServer.js";
import { requestGenre } from "./nameGenres.js";

const requestServer = new RequestServer();

async function loadMovies() {
  await requestGenre();

  const response = await requestServer.newFilms();
  const { results } = response.data;

  const movieList = results.map(({
    poster_path,
    original_title = "",
    genre_ids,
    overview = "",
    release_date = "",
    vote_average = "",
    id,
  }) => ({
    poster_path,
    original_title,
    genre_ids,
    overview,
    release_date,
    vote_average,
    id,
  }));

  saveMovieList(movieList);

  const markupCard = markup(movieList);
  const movieContainer = document.querySelector(".movie__container");
  if (movieContainer) {
    movieContainer.innerHTML = markupCard;
  }
}

function saveMovieList(movieList) {
  localStorage.setItem("movieList", JSON.stringify(movieList));
}

function getMovieList() {
  const movieList = localStorage.getItem("movieList");
  if (movieList) {
    return JSON.parse(movieList);
  }
  return [];
}

async function addMovie() {
  // Добавляем новый фильм в список фильмов
  const newMovie = await requestServer.getNewMovie();
  const movieList = getMovieList();
  movieList.push(newMovie);

  // Сохраняем обновленный список фильмов в localStorage
  saveMovieList(movieList);

  // Обновляем разметку страницы
  const markupCard = markup(movieList);
  const movieContainer = document.querySelector(".movie__container");
  if (movieContainer) {
    movieContainer.innerHTML = markupCard;
  }
}

loadMovies();

const addButton = document.querySelector(".add__button");
if (addButton) {
  addButton.addEventListener("click", addMovie);
}
