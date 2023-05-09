import {RequestServer} from "../requestServer"


const requestServer = new RequestServer();

const wrapper = document.querySelector(".wrapper");

const KEY_LOCALSTORAGE = "my-library"

const utils = {
    cardsInfo: [],
    localStorage: getLocalStorage(KEY_LOCALSTORAGE) ?  transformJSONtoObj(getLocalStorage(KEY_LOCALSTORAGE)) : []
}

console.log("text", utils.localStorage)

if (utils.localStorage.length == 0) {
    addToLocalStorage(KEY_LOCALSTORAGE, transformObjToJSON([]))
}



async function getMovieDetails(id) {
    const response = await requestServer.movieDetails(id)
    const {data} = response;
    return data
}

export async function startRenderModalInfo(id = 603692) {
    const data = await getMovieDetails(id)
    console.log("DATA", data)

    utils.cardsInfo.push(data)

    await createModalInfo(data)
    await btnAddToLocalStorage()
}

function createModalInfo(data) {
    const modal = document.querySelector(".modal-card-info")
    const imgHTML = document.querySelector(".modal__img-true");
    const nameFilmHTML = document.querySelector(".column__name");
    const voteHTML = document.querySelector(".votes-1");
    const votesHTML = document.querySelector(".votes-2");
    const popolatityHTML = document.querySelector('.popularity-text')
    const genreHTML = document.querySelector('.genre-text');
    const aboutHTML = document.querySelector('.about-text');


    const {
        id = 603692,
        poster_path = "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
        title = "", 
        vote_average= '',
        vote_count = '',
        popularity = '', 
        genres = "",
        overview = ""
    } = data

    img = "https://image.tmdb.org/t/p/original" + poster_path;



    modal.dataset.id = id
    imgHTML.src = img;
    imgHTML.alt = title;
    nameFilmHTML.textContent = title;
    voteHTML.textContent = vote_average;
    votesHTML.textContent = vote_count;
    popolatityHTML.textContent = popularity;
    genreHTML.textContent = [...genres].map(item => item.name).join(" ");
    aboutHTML.textContent = overview

}






function btnAddToLocalStorage() {
    const btn = document.querySelector(".btn__add-to-library");



    btn.addEventListener("click", function (e) {
        const target = e.target;

        let id = null

        if (target.tagName == "BUTTON") {

            id = getParentElemntData(target, ".modal-card-info")
        }    

        if (target.tagName == "SPAN") {

            id = getParentElemntData(target, ".modal-card-info")
        }

        if (isCheck(+id)) {
            upDateLocalStorage(KEY_LOCALSTORAGE, utils.localStorage)
        }
    })
}


function isCheck(id) {
    if (!utils.localStorage.includes(id)) {
        utils.localStorage.push(id);
        return true
    } 
}



// поиск родительского эелмента с классом .modal-card-info и получение data атрибута id фильма 
function getParentElemntData(element, selector) {
    return element.closest(selector).dataset.id
}

function upDateLocalStorage(key, data) {
    addToLocalStorage(key, transformObjToJSON(data))
}

// добавление значение в localStorage
function addToLocalStorage(key, obj) {
    localStorage.setItem(key, obj)
}
// поулчение значаний из localStorage по ключу my-libraries
function getLocalStorage(key) {
    localStorage.getItem(key)
}

// преобразование js обьекта в JSON обьект
function transformObjToJSON(obj) {
    try {

        return JSON.stringify(obj)
    } catch (error) {
        console.log(error)
    }
}

// преобразование JSON обьекта в js обьект
function transformJSONtoObj(obj) {
    try {

        return JSON.parse(obj)
    } catch (error) {
        console.log(error)

    }
}