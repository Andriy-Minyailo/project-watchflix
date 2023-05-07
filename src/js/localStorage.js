import { markup } from "./markup.js";
import { requestGenre } from "./nameGenres.js";

const KEY_MOVIE_LIST = "movieList";
 const movieContainer = document.querySelector(".not-found__container");
  const testMovieList = {
    poster_path: "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    genre_ids: [12, 14, 35],
    overview: 
"A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    release_date: "2023-03-23",
    vote_average: 7.56,
    id: 493529,
  };

export function loadMoveList(obj) {
  const currentState = getMovieList(KEY_MOVIE_LIST);
  console.log(currentState);
  if (!currentState) {
          saveMovieList(KEY_MOVIE_LIST, [obj]);
      // console.log(currentState);
  } else {
    currentState.push(testMovieList);
  }
}
loadMoveList(testMovieList); // це функція для перевірки і збереження в localStorafe

async function checkLocalStorage(key) {
  const localMovieList = getMovieList(key);
  if (localMovieList) {
    const genres = await requestGenre();
    const localMarkup = markup(localMovieList);
      movieContainer.innerHTML = localMarkup;
  } 
}

checkLocalStorage(KEY_MOVIE_LIST);

function saveMovieList(key, obj) {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.log(error);
  };
}

function getMovieList(key) {
  try {
    const movieList = localStorage.getItem(key);
    return movieList === null ? undefined : JSON.parse(movieList);
  } catch (error) {
    console.log(error);
  };
}