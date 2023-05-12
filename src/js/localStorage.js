// import { checkLocalStorage } from "./checkLocalStorage.js";
// import { requestGenre } from "./nameGenres.js";
// import { baseLocalMarkup } from "./baseLocalMarkup.js";

export const KEY_MOVIE_LIST = "movieList";

export function loadMoveList(data) {
  const currentState = getMovieList(KEY_MOVIE_LIST);
 
  if (!currentState) {
          saveMovieList(KEY_MOVIE_LIST, [data]);
      
  } else {
    currentState.push(data);
    saveMovieList(KEY_MOVIE_LIST, currentState);
  }
}

// export function deleteLocalFilm(index) {
//   const currentState = getMovieList(KEY_MOVIE_LIST);
//   currentState.splice(index, 1);
//   saveMovieList(KEY_MOVIE_LIST, currentState);
//   // checkLocalStorage();
// }
// loadMoveList(testMovieList); // це функція для перевірки і збереження в localStorafe
// loadMoveList(testMovieList2); // це функція для перевірки і збереження в localStorafe


// export function checkLocalStorage(key) {
//   const localMovieList = getMovieList(key);
//   
//   if (localMovieList) {
//    
   
    
//     // refs.moviBase.innerHTML = "";
//     refs.movieContainer.innerHTML = localMovieList;
//     // refs.movieContainer.classList.remove('not-found__container');
//   }
//    else {
//     refs.moviBase.innerHTML = baseLocalMarkup;
//   
//     }
// }

// checkLocalStorage(KEY_MOVIE_LIST);

export function saveMovieList(key, obj) {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.log(error);
  };
}

export function getMovieList(key) {
  try {
    const movieList = localStorage.getItem(key);
    return movieList === null ? undefined : JSON.parse(movieList);
  } catch (error) {
    console.log(error);
  };
}