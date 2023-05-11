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

    const weeklyTitle = document.querySelector('.weekly-tr__title');
    let LightSwitcher = document.querySelector('.switcher');
    let isLight = localStorage.getItem('isLight');
    if (isLight === 'true') {
      weeklyTitle.classList.add('weekly-tr__title-light');
    }
    LightSwitcher.addEventListener('click', () => {
      weeklyTitle.classList.toggle('weekly-tr__title-light');
    });
  } catch (error) {
    console.log(error);
  }
}
weeklyTrend();
