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

    if (!currentState) {
        // const filmIndex = currentState.findIndex(obj => obj.id === Number(id));
        refs.btnModalInfo.textContent = stateButton.addText;
        stateButton.currentStateButton = true;

        return;
    }
    // const [idLocalArray] = Object.keys(currentState);
     filmIndex = currentState.findIndex(obj => obj.id === idFilm);
   
    
        if (filmIndex !== -1) {
        refs.btnModalInfo.textContent = stateButton.removeText;
        stateButton.currentStateButton = false;
       
       
        } else {
        refs.btnModalInfo.textContent = stateButton.addText;
        stateButton.currentStateButton = true;
      
  }
    }

refs.btnModalInfo.addEventListener('click', onLoadLocalStorage);

function onLoadLocalStorage(event) {
   
   
    if (stateButton.currentStateButton) {
        loadMoveList(stateButton.localMarkup);
        stateButton.currentStateButton = false;
        refs.btnModalInfo.textContent = stateButton.removeText;
       
    } else {
        deleteLocalFilm(filmIndex);
        stateButton.currentStateButton = true;
        refs.btnModalInfo.textContent = stateButton.addText;
        
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
