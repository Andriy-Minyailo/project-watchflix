// import { markup } from './markup';
// import { RequestServer } from './requestServer';

// const requestServer = new RequestServer();
// const form = document.querySelector('#catalog-search-form');
// const searchInput = document.querySelector('#catalog-search-input');
// const yearSelect = document.querySelector('#catalog-year-select');
// const genreSelect = document.querySelector('#catalog-genre-select');
// const countrySelect = document.querySelector('#catalog-country-select');
// const list = document.querySelector('#catalog-list');
// const notFoundMessage = document.querySelector('#catalog-not-found-message');
// const errorMessage = document.querySelector('#catalog-error-message');

// let currentPage = 1;

// let searchParams = {
//   searchQuery: undefined,
//   year: undefined,
//   genre: undefined,
//   country: undefined,
// };

// const listDisplay = {
//   hideClassName: 'catalog__list--hidden',
//   show() {
//     list.classList.remove(this.hideClassName);
//   },
//   hide() {
//     list.classList.add(this.hideClassName);
//   },
// };

// const notFoundMessageDisplay = {
//   hideClassName: 'catalog__message--hidden',
//   show() {
//     notFoundMessage.classList.remove(this.hideClassName);
//   },
//   hide() {
//     notFoundMessage.classList.add(this.hideClassName);
//   },
// };

// const errorMessageDisplay = {
//   hideClassName: 'catalog__message--hidden',
//   show() {
//     errorMessage.classList.remove(this.hideClassName);
//   },
//   hide() {
//     errorMessage.classList.add(this.hideClassName);
//   },
// };

// const displaySelects = () => {
//   const classNameToRemove = 'catalog__search-form-input--hidden';

//   yearSelect.classList.remove(classNameToRemove);
//   genreSelect.classList.remove(classNameToRemove);
//   countrySelect.classList.remove(classNameToRemove);
// };

// const addSelectOption = (selectEl, optionValue, optionLabel) => {
//   const option = document.createElement('option');

//   option.value = optionValue;
//   option.innerHTML = optionLabel ?? optionValue;

//   selectEl.append(option);
// };

// const configureYearSelect = () => {
//   const startFromYear = 2000;

//   for (let year = new Date().getFullYear(); year >= startFromYear; year--) {
//     addSelectOption(yearSelect, year);
//   }
// };

// const configureGenreSelect = async () => {
//   const genres = (await requestServer.movieGenre()).data.genres;

//   genres.forEach(genre => addSelectOption(genreSelect, genre.id, genre.name));
// };

// const configureSelects = () => {
//   configureYearSelect();
//   configureGenreSelect();
// };

// const searchParamsToQuery = params => {
//   const searchQuery = params.searchQuery;
//   const year = params.year;
//   const genre = params.genre;
//   const country = params.country;

//   let query = '';

//   if (searchQuery) {
//     query += searchQuery;
//   }

//   if (year) {
//     query += `&year=${year}`;
//   }

//   if (genre) {
//     query += `&genre=${genre}`;
//   }

//   if (country) {
//     query += `&country=${country}`;
//   }

//   return query;
// };

// let totalItems = 0;

// const fetchMovies = async params => {
//   try {
//     const query = searchParamsToQuery(params);
//     const response = await requestServer.searchMovies(query);

//     return response.data.results;
//   } catch (error) {
//     

//     listDisplay.hide();
//     errorMessageDisplay.show();
//   }
// };

// const renderMovies = async movies => {
//   if (movies.length) {
//     const moviesMarkup = markup(movies);

//     errorMessageDisplay.hide();
//     notFoundMessageDisplay.hide();

//     list.innerHTML = moviesMarkup;
//     listDisplay.show();
//   } else {
//     listDisplay.hide();
//     notFoundMessageDisplay.show();
//   }
// };

// const handlePageChange = async event => {
//   currentPage = event.target.dataset.page;

//   const movies = await fetchMovies();

//   await renderMovies(movies);
// };

// const fillSearchParams = () => {
//   searchParams = {
//     searchQuery: searchInput.value,
//     year: document.querySelector('#catalog-year-select').value,
//     genre: document.querySelector('#catalog-genre-select').value,
//     country: document.querySelector('#catalog-country-select').value,
//   };
// };

// const handleSubmit = async event => {
//   event.preventDefault();

//   fillSearchParams();

//   const movies = await fetchMovies(searchParams);

//   displaySelects();
//   renderMovies(movies);
// };

// configureSelects();

// form.addEventListener('submit', handleSubmit);


// pagination.on('afterMove', async (event) => {
//   currentPage = event.page;
//   const movies = await fetchMovies(searchParams);
//   await renderMovies(movies);
// });

import { markup } from './markup';
import { RequestServer } from './requestServer';
import { pagination } from './pagination';

const requestServer = new RequestServer();
const form = document.querySelector('#catalog-search-form');
const searchInput = document.querySelector('#catalog-search-input');
const yearSelect = document.querySelector('#catalog-year-select');
const genreSelect = document.querySelector('#catalog-genre-select');
const countrySelect = document.querySelector('#catalog-country-select');
const list = document.querySelector('#catalog-list');
const notFoundMessage = document.querySelector('#catalog-not-found-message');
const errorMessage = document.querySelector('#catalog-error-message');

let currentPage = 1;

let searchParams = {
  searchQuery: undefined,
  year: undefined,
  genre: undefined,
  country: undefined,
};

const listDisplay = {
  hideClassName: 'catalog__list--hidden',
  show() {
    list.classList.remove(this.hideClassName);
  },
  hide() {
    list.classList.add(this.hideClassName);
  },
};

const notFoundMessageDisplay = {
  hideClassName: 'catalog__message--hidden',
  show() {
    notFoundMessage.classList.remove(this.hideClassName);
  },
  hide() {
    notFoundMessage.classList.add(this.hideClassName);
  },
};

const errorMessageDisplay = {
  hideClassName: 'catalog__message--hidden',
  show() {
    errorMessage.classList.remove(this.hideClassName);
  },
  hide() {
    errorMessage.classList.add(this.hideClassName);
  },
};

const displaySelects = () => {
  const classNameToRemove = 'catalog__search-form-input--hidden';

  yearSelect.classList.remove(classNameToRemove);
  genreSelect.classList.remove(classNameToRemove);
  countrySelect.classList.remove(classNameToRemove);
};

const addSelectOption = (selectEl, optionValue, optionLabel) => {
  const option = document.createElement('option');

  option.value = optionValue;
  option.innerHTML = optionLabel ?? optionValue;

  selectEl.append(option);
};

const configureYearSelect = () => {
  const startFromYear = 2000;

  for (let year = new Date().getFullYear(); year >= startFromYear; year--) {
    addSelectOption(yearSelect, year);
  }
};

const configureGenreSelect = async () => {
  const genres = (await requestServer.movieGenre()).data.genres;

  genres.forEach(genre => addSelectOption(genreSelect, genre.id, genre.name));
};

const configureSelects = () => {
  configureYearSelect();
  configureGenreSelect();
};

const searchParamsToQuery = params => {
  const searchQuery = params.searchQuery;
  const year = params.year;
  const genre = params.genre;
  const country = params.country;

  let query = '';

  if (searchQuery) {
    query += searchQuery;
  }

  if (year) {
    query += `&year=${year}`;
  }

  if (genre) {
    query += `&genre=${genre}`;
  }

  if (country) {
    query += `&country=${country}`;
  }

  return query;
};

let totalItems = 0;
let totalPages = 0;

const fetchMovies = async params => {
  try {
    const query = searchParamsToQuery(params);
    const response = await requestServer.searchMovies(`${query}&page=${currentPage}&perPage=${pagination._options.itemsPerPage}`);
    pagination._options.totalItems = 0;

    
    totalItems = response.data.total_results;
    totalPages = response.data.total_pages;
    pagination._options.totalItems = totalItems;
    return response.data.results;
  } catch (error) {
    console.log(error);

    listDisplay.hide();
    errorMessageDisplay.show();
  }
};

const renderMovies = async movies => {
  if (movies.length) {
    const moviesMarkup = markup(movies);
    errorMessageDisplay.hide();
    notFoundMessageDisplay.hide();

    list.innerHTML = moviesMarkup;
    listDisplay.show();
  } else {
    listDisplay.hide();
    notFoundMessageDisplay.show();
  }
};

const handlePageChange = async event => {
  currentPage = event.target.dataset.page;
 

  const movies = await fetchMovies();

  await renderMovies(movies);
};

const fillSearchParams = () => {
  searchParams = {
    searchQuery: searchInput.value,
    year: document.querySelector('#catalog-year-select').value,
    genre: document.querySelector('#catalog-genre-select').value,
    country: document.querySelector('#catalog-country-select').value,
  };
};

const handleSubmit = async event => {
  event.preventDefault();

  fillSearchParams();

  const movies = await fetchMovies(searchParams);

  displaySelects();
  renderMovies(movies);
  pagination.reset();
};

configureSelects();

form.addEventListener('submit', handleSubmit);


pagination.on('afterMove', async (event) => {
  currentPage = event.page;
  
  const movies = await fetchMovies(searchParams);
  await renderMovies(movies);
});