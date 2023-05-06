import { RequestServer } from "./requestServer";
import { markupHero } from './markupHero';


const ref = {
    hero: document.getElementById("hero")
}
const requestServer = new RequestServer();
console.log(requestServer[0])

async function ontrendingDay() {
  
    try {
        const responseDay = await requestServer.trendingDay();
        const { results } = responseDay.data;
        console.log(results);
      const filmOfDay = results;
      // console.log(filmOfDay)
        const markupBackgr = markupHero(filmOfDay);

        ref.hero.innerHTML =  markupBackgr;
    } catch(error) {
    console.log(error);
  };
}
ontrendingDay()