import { RequestServer } from './requestServer';
import { markupHero } from './markupHero';
import { applyWatchTraileListener } from './modalTrailer';

const ref = {
    hero: document.getElementById("hero")
}

const requestServer = new RequestServer();

async function ontrendingDay() {
    try {
        const responseDay = await requestServer.trendingDay();
        const { results } = responseDay.data;
    
        const filmOfDay = results;
        const markupBackgr = markupHero(filmOfDay);

      ref.hero.innerHTML = markupBackgr;

      const toggleThemeBtn = document.getElementById('toggel-btn');
      const discription = document.querySelector('.hero__discription');
      const heroTitle = document.querySelector('.hero__title');
      const heroText = document.querySelector('.hero__text');

      toggleThemeBtn.addEventListener('click', () => {
        discription.classList.toggle('hero__discription-light');
        heroTitle.classList.toggle('hero__title-light');
        heroText.classList.toggle('hero__text-light');
      })
      applyWatchTraileListener();
    } catch(error) {
    console.log(error);
  }
}

ontrendingDay();