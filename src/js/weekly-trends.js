import { RequestServer } from './requestServer';
import { markup } from './markup';
import { requestGenre } from './nameGenres';

const refs = {
  weeklyCard: document.querySelector('.card'),
};
const requestServer = new RequestServer();

async function weeklyTrend() {
  try {
    const genres = await requestGenre();
    const responseWeek = await requestServer.trendingWeek();
    const { results } = responseWeek.data;
    const markupCard = markup(results.slice(0, 3));

    refs.weeklyCard.innerHTML = markupCard;
  } catch (error) {
    console.log(error);
  }
}
weeklyTrend();
