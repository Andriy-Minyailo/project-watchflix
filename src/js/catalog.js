
import { RequestServer } from './requestServer';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const movieList = document.querySelector('#movie-list');
let currentPage = 1;

const renderMovies = async () => {
  const response = await RequestServer.trendingWeek(currentPage);
  const movies = response.data.results;
  if (movies.length > 0) {
    // clear previous results
    movieList.innerHTML = '';
    movies.forEach(movie => {
      // create and append movie element to movieList
    });
  } else {
    // show message that no movies were found
  }
};

const handlePageChange = async event => {
  currentPage = event.target.dataset.page;
  await renderMovies();
};

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = {
    searchQuery: input.value,
    year: document.querySelector('.year-form__input').value,
    genre: document.querySelector('.genre-form__input').value,
    country: document.querySelector('.country-form__input').value,
  };
  const response = await RequestServer.searchMovies(query);
  const movies = response.data.results;
  if (movies.length > 0) {
    // clear previous results
    movieList.innerHTML = '';
    movies.forEach(movie => {
      // create and append movie element to movieList
    });
  } else {
    // show message that no movies were found
  }
});

renderMovies();

const pagination = document.querySelector('#pagination');
pagination.addEventListener('click', handlePageChange);

const submitButton = document.querySelector(
  '.search-white-magnifier-dark-theme'
);
submitButton.addEventListener('click', async event => {
  event.preventDefault();
  const query = {
    searchQuery: input.value,
    year: document.querySelector('.year-form__input').value,
    genre: document.querySelector('.genre-form__input').value,
    country: document.querySelector('.country-form__input').value,
  };
  const response = await RequestServer.searchMovies(query);
  const movies = response.data.results;
  if (movies.length > 0) {
    // clear previous results
    movieList.innerHTML = '';
    movies.forEach(movie => {
      // create and append movie element to movieList
    });
  } else {
    // show message that no movies were found
  }
});



