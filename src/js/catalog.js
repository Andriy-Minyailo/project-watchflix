import { RequestServer } from './requestServer';
const searchForm = document.getElementById('search-form');
const movieList = document.getElementById('movie-list');

const requestServer = new RequestServer();
// Створюємо об'єкт для зберігання значень фільтрів


fetch(`https://api.example.com/search?apiKey=${apiKey}&query=${searchQuery}`)
  .then(response => response.json())
  .then(data => {
    // Обробка результатів пошуку
  })
  .catch(error => {
    // Обробка помилки
  });
const searchResultsContainer = document.getElementById('search-results');

// Очищаємо контейнер результатів
searchResultsContainer.innerHTML = '';

// Додавання результатів до контейнера
data.results.forEach(result => {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `
    <img src="${result.poster}" alt="${result.title}">
    <h2>${result.title}</h2>
    <p>${result.description}</p>
  `;
  searchResultsContainer.appendChild(movieElement);
});
// const searchForm = document.getElementById('search-form');
// const movieList = document.getElementById('movie-list');

// Створюємо об'єкт для зберігання значень фільтрів
const filters = {
  year: '',
  genre: '',
  country: '',
};

// Функція для зміни значення фільтра
function handleFilterChange(filter, value) {
  filters[filter] = value;
}

// Функція для відображення результатів пошуку
function renderMovies(movies) {
  movieList.innerHTML = '';

  if (movies.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No movies found.';
    movieList.appendChild(noResults);
  } else {
    for (const movie of movies) {
      const movieItem = document.createElement('li');
      movieItem.textContent = movie.title;
      movieList.appendChild(movieItem);
    }
  }
}

// Обробник події submit форми пошуку
searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const searchInput = searchForm.querySelector('.search-form__input');

  // Отримуємо значення пошукового запиту
  const query = searchInput.value;

  try {
    // Отримуємо результати пошуку за допомогою AJAX-запиту на сервер
    const response = await fetch(
      `/search?query=${query}&year=${filters.year}&genre=${filters.genre}&country=${filters.country}`
    );
    const movies = await response.json();

    // Відображаємо результати пошуку
    renderMovies(movies);
  } catch (error) {
    console.error(error);
  }
});

// Обробники подій зміни значень випадаючих селектів
const yearInput = searchForm.querySelector('.year-form__input');
yearInput.addEventListener('change', event => {
  handleFilterChange('year', event.target.value);
});

const genreInput = searchForm.querySelector('.genre-form__input');
genreInput.addEventListener('change', event => {
  handleFilterChange('genre', event.target.value);
});

const countryInput = searchForm.querySelector('.country-form__input');
countryInput.addEventListener('change', event => {
  handleFilterChange('country', event.target.value);
});
