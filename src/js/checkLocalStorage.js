// import { checkLocalStorage } from "./localStorage";
import { KEY_MOVIE_LIST } from "./localStorage";
import { getMovieList } from "./localStorage";
import { baseLocalMarkup } from "./baseLocalMarkup.js";
import { markupLocal } from "./localMarkup";
import { LoadMoreButton } from './loadMoreButton';

const refs = {
  movieContainer: document.querySelector(".card"),
  moviBase: document.querySelector("#localBase"),
  loadMoreButton: document.querySelector('.load-more'),
}
const onloadMoreButton = new LoadMoreButton({
    isHiden: true,
    active: false,
    buttonAdress: refs.loadMoreButton
});
let quantityFilm;
// onloadMoreButton.buttonState({});

export function checkLocalStorage(key) {
  const localMovieList = getMovieList(key);
  
  if (!refs.moviBase) {
    return;
  }
  if (localMovieList !== undefined) {
    quantityFilm = localMovieList.length;
    const localMovieListFist =  localMovieList.slice(0, 9);
    if (quantityFilm > 9) {
    
      onloadMoreButton.buttonState({
            isHiden: false,
            active: true,
                });
      activeLoadMore(onloadMoreButton.active);
      } else (onloadMoreButton.buttonState({
            isHiden: true,
            active: false,
                }))
        refs.moviBase.innerHTML = "";
    refs.movieContainer.innerHTML = markupLocal(localMovieListFist);
    }
  else {
    refs.movieContainer.innerHTML = '';
    refs.moviBase.innerHTML = baseLocalMarkup;
    }
}

checkLocalStorage(KEY_MOVIE_LIST);

function activeLoadMore(state) {
  if (state) {
    refs.loadMoreButton.addEventListener('click', onSumbitLoadMore);
  }
}

function onSumbitLoadMore() {
  const localMovieList = getMovieList(KEY_MOVIE_LIST);
    let start = 9;
    let end = 18;
    const localMovieList12 = localMovieList.slice(start, end);
    refs.movieContainer.insertAdjacentHTML("beforeend", markupLocal(localMovieList12));
    start += 9;
    end += 9;
  quantityFilm -= 9;
  
  if (quantityFilm < 9) {
    onloadMoreButton.buttonState({
      isHiden: true,
      active: false,
    });
    refs.loadMoreButton.removeEventListener("click", onSumbitLoadMore);
  } 
    // let start = 12;
    // let end = 24;
    // const localMovieList12 = localMovieList.slice(start, end);
    // refs.movieContainer.insertAdjacentHTML("beforeend", markupLocal(localMovieList12));
    // start += 12;
    // end += 12;
  
}
