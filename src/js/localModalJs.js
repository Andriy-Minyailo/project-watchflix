import { getMovieList } from "./localStorage";
import { saveMovieList } from "./localStorage";
import { loadMoveList } from "./localStorage";
import { KEY_MOVIE_LIST } from "./localStorage";
import { checkLocalStorage } from "./checkLocalStorage";
import {startRenderModalInfo} from './createModalInfo/createModalInfo'
import { modalListener } from './modals-open-close';
// let localMarkup;
let filmIndex;

const refs = {
    card: document.querySelector('.card'),
    modalCardInfo: document.querySelector('#modalCardInfo'),
    btnModalInfo: document.querySelector('#btnModalInfo'),
}
const stateButton = {
    addText: 'Add to my library',
    removeText: 'Delete from my library',
    localMarkup: '',
    currentStateButton: true
}

refs.card.addEventListener('click', onLoadModal);

function onLoadModal(event) {
    const { id } = event.target.offsetParent;
    // console.log(event.target.offsetParent.innerHTML);
    if (!id) { return };
    const idNum = Number(id);
    stateButton.localMarkup = {
        id: idNum,
        str: event.target.offsetParent.innerHTML
    };
    checkFilmLocalStorage(idNum);
    startRenderModalInfo(idNum);
    modalListener('modal-1');
     }

function checkFilmLocalStorage(idFilm) {
    const currentState = getMovieList(KEY_MOVIE_LIST);
    console.log(currentState);
    if (!currentState) {
        // const filmIndex = currentState.findIndex(obj => obj.id === Number(id));
        refs.btnModalInfo.textContent = stateButton.addText;
        stateButton.currentStateButton = true;
        // console.log(filmIndex);
        // console.log(stateButton.addText);
        return;
    }
    // const [idLocalArray] = Object.keys(currentState);
     filmIndex = currentState.findIndex(obj => obj.id === idFilm);
   
    // console.log(filmIndex);
        if (filmIndex !== -1) {
        refs.btnModalInfo.textContent = stateButton.removeText;
        stateButton.currentStateButton = false;
       
        console.log(stateButton.removeText);
        } else {
        refs.btnModalInfo.textContent = stateButton.addText;
        stateButton.currentStateButton = true;
        // console.log(filmIndex);
        // console.log(stateButton.addText); 
  }
    }

refs.btnModalInfo.addEventListener('click', onLoadLocalStorage);

function onLoadLocalStorage(event) {
   
    console.log(stateButton.currentStateButton);
    if (stateButton.currentStateButton) {
        loadMoveList(stateButton.localMarkup);
        stateButton.currentStateButton = false;
        refs.btnModalInfo.textContent = stateButton.removeText;
        console.log('add');
    } else {
        deleteLocalFilm(filmIndex);
        stateButton.currentStateButton = true;
        refs.btnModalInfo.textContent = stateButton.addText;
        console.log('remove');
        checkLocalStorage(KEY_MOVIE_LIST);
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
