import { RequestServer } from "./requestServer";
import { markup } from './markup';
import { requestGenre } from './nameGenres'

const refs = {
    cardContainer: document.querySelector('.card')
}
const requestServer = new RequestServer();

async function ontrendingWeek() {
  
    try {
        const genres = await requestGenre();
        const responseWeek = await requestServer.trendingWeek();
        const { results } = responseWeek.data;
       
        // const test = results.slice(0, 3);
        const markupCard = markup(results);

        refs.cardContainer.innerHTML =  markupCard;
    } catch(error) {
    console.log(error);
  };
}
ontrendingWeek();

