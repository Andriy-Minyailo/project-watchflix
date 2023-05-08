import {RequestServer} from "../requestServer"


const requestServer = new RequestServer();

const wrapper = document.querySelector(".wrapper");


async function getMovieDetails(id = 5) {
    const response = await requestServer.movieDetails(id)
    const {data} = response;
    return data
}






export async function startrenderModalInfo(id = 4) {
    const data = await getMovieDetails(id)
    console.log("DATA", data)

    await createModalInfo(data)
}


function createModalInfo(data) {

    const imgHTML = document.querySelector(".modal__img-true");
    const nameFilmHTML = document.querySelector(".column__name");
    const voteHTML = document.querySelector(".votes-1");
    const votesHTML = document.querySelector(".votes-2");
    const popolatityHTML = document.querySelector('.popularity-text')
    const genreHTML = document.querySelector('.genre-text');
    const aboutHTML = document.querySelector('.about-text');


    const {
        poster_path = "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
        title = "", 
        vote_average= '',
        vote_count = '',
        popularity = '', 
        genres = "",
        overview = ""
    } = data

    img = "https://image.tmdb.org/t/p/original" + poster_path;




    imgHTML.src = img;
    imgHTML.alt = title;
    nameFilmHTML.textContent = title;
    voteHTML.textContent = vote_average;
    votesHTML.textContent = vote_count;
    popolatityHTML.textContent = popularity;
    genreHTML.textContent = [...genres].map(item => item.name).join(" ");
    aboutHTML.textContent = overview

}




