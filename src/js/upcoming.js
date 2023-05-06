import { RequestServer } from './requestServer';

const loadingMessageEl = document.querySelector('#upcoming-loading-message');
const noDataMessageEl = document.querySelector('#upcoming-no-data-message');
const errorMessageEl = document.querySelector('#upcoming-error-message');
const movieEl = document.querySelector('#upcoming-movie');

const requestServer = new RequestServer();

const fetchUpcoming = async () => {
  try {
    const response = await requestServer.newFilms();

    await fillData(response);

    hideLoadingMessage();
    showMovie();
  } catch (error) {
    console.error(error);

    hideLoadingMessage();
    showErrorMessage();
  }
};

const fillData = async response => {
  const movies = response.data.results;
  const moviesLength = movies.length;

  if (!moviesLength) {
    hideLoadingMessage();
    showNoDataMessage();

    return;
  }

  const movie = movies[Math.round(Math.random() * (moviesLength - 1))];

  fillTitle(movie.original_title);
  fillBackdrop(movie.backdrop_path);
  fillReleaseDate(movie.release_date);
  fillVote(movie.vote_average, movie.vote_count);
  fillPopularity(movie.popularity);

  await fillGenre(movie);

  fillAbout(movie.overview);
};

const hideLoadingMessage = () =>
  loadingMessageEl.classList.add('upcoming__status-message--hidden');

const showNoDataMessage = () =>
  noDataMessageEl.classList.remove('upcoming__status-message--hidden');

const showErrorMessage = () =>
  errorMessageEl.classList.remove('upcoming__status-message--hidden');

const showMovie = () => {
  movieEl.classList.remove('upcoming__movie--hidden');
};

const fillReleaseDate = value => {
  const releaseDate = document.querySelector('#upcoming-movie-release-date');
  const originalDate = new Date(value);
  const formattedDate = originalDate.toLocaleDateString().replace(/\//g, '.');

  releaseDate.innerText = formattedDate;
};

const fillVote = (voteAverage, voteCount) => {
  const voteAverageEl = document.querySelector('#upcoming-vote-average');
  const voteCountEl = document.querySelector('#upcoming-vote-count');

  voteAverageEl.innerText = voteAverage;
  voteCountEl.innerText = voteCount;
};

const fillPopularity = value => {
  const popularity = document.querySelector('#upcoming-movie-popularity');

  popularity.innerText = value.toFixed(1);
};

const fillGenre = async movie => {
  const genreEl = document.querySelector('#upcoming-movie-genre');

  const genres = await requestServer.movieGenre();

  const currentMovieGenres = genres
    ? movie.genre_ids.map(id =>
        genres.data.genres.find(genre => genre.id === id)
      )
    : [];

  const genresString = currentMovieGenres.map(genre => genre.name).join(', ');

  genreEl.innerText = genresString || '-';
};

const fillAbout = value => {
  const about = document.querySelector('#upcoming-movie-about');

  about.innerText = value;
};

const fillTitle = value => {
  const title = document.querySelector('#upcoming-movie-title');

  title.innerText = value;
};

const fillBackdrop = async backdropPath => {
  const img = document.querySelector('#upcoming-movie-backdrop');

  img.src = `https://image.tmdb.org/t/p/original${backdropPath}`;
};

fetchUpcoming();
