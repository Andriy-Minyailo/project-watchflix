import { RequestServer } from './requestServer';
import { KEY_MOVIE_LIST } from "./localStorage";
import { getMovieList } from "./localStorage";
import { saveMovieList } from "./localStorage";
import { loadMoveList } from "./localStorage";

const loadingMessageEl = document.querySelector('#upcoming-loading-message');
const noDataMessageEl = document.querySelector('#upcoming-no-data-message');
const errorMessageEl = document.querySelector('#upcoming-error-message');
const movieEl = document.querySelector('#upcoming-movie');
const btn = document.querySelector('#upcoming-remind-btn');

const requestServer = new RequestServer();
let currenyMovie;
let filmIndex;
const stateButtonUpc = {
    addText: 'Remind me',
    removeText: 'Delete from my library',
    localMarkup: '',
    currentStateButton: true
}

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

 const { poster_path,
    original_title = '',
    overview = '',
    release_date = '',
    vote_average = '',
    id } = movie;

  checkMovieLocalStorage(id);
  const genreEl = document.querySelector('#upcoming-movie-genre');
  const genreText = genreEl.innerText;
  const genreTwo = genreText.split(',').slice(0, 2);
   let releaseDate;
        if (!release_date) {
          releaseDate = 'no date';
        } else {
          releaseDate = release_date.substring(0, 4);
        }
        let path = `https://image.tmdb.org/t/p/w500${poster_path}`;
        if (!poster_path) {
          path = 'https://picsum.photos/500/750';
        }
    let rating = '';
          for (let i = 1; i <= 5; i++) {
            let ratingClass = 'fa-star-o';
            if (i * 2 <= vote_average) {
              ratingClass = 'fa-star';
            } else if (i * 2 - 1 <= vote_average) {
              ratingClass = 'fa-star-half-o';
            }
            rating += `<span class="fa star ${ratingClass}"> </span>`;
          }
 stateButtonUpc.localMarkup = {
        id: id,
        str: `<img src='${path}' loading="lazy" alt="${overview}" class="card__img" />
            <div class="container-info">
            <h2 class="card__title">${original_title}</h2>
            <p class="card__desc">${genreTwo} | ${releaseDate}</p>
            <p class="card__rating">${rating}</p>
            </div>`
    };
 

  
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






function checkMovieLocalStorage(idFilm) {
    const currentState = getMovieList(KEY_MOVIE_LIST);
   
    if (!currentState) {
        // const filmIndex = currentState.findIndex(obj => obj.id === Number(id));
        btn.textContent = stateButtonUpc.addText;
        stateButtonUpc.currentStateButton = true;

        return;
    }
    // const [idLocalArray] = Object.keys(currentState);
     filmIndex = currentState.findIndex(obj => obj.id === idFilm);
   
   
        if (filmIndex !== -1) {
        btn.textContent = stateButtonUpc.removeText;
        stateButtonUpc.currentStateButton = false;
       
       
        } else {
        btn.textContent = stateButtonUpc.addText;
        stateButtonUpc.currentStateButton = true;
   
  }
}
if (btn) {
  btn.addEventListener('click', onLoadLocalStorage);
}
     
function onLoadLocalStorage(event) {
   
   
    if (stateButtonUpc.currentStateButton) {
        loadMoveList(stateButtonUpc.localMarkup);
        stateButtonUpc.currentStateButton = false;
        btn.textContent = stateButtonUpc.removeText;
       
    } else {
        deleteLocalFilm(filmIndex);
        stateButtonUpc.currentStateButton = true;
        btn.textContent = stateButtonUpc.addText;
     
        // checkLocalStorage(KEY_MOVIE_LIST);
    }
}


function deleteLocalFilm(index) {
    const currentState = getMovieList(KEY_MOVIE_LIST);
    if (currentState.length === 1) {
        localStorage.removeItem(KEY_MOVIE_LIST);
        return;
    }
  currentState.splice(index, 1);
  saveMovieList(KEY_MOVIE_LIST, currentState);
  // checkLocalStorage();
} 