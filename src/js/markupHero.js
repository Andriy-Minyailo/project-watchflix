import desktop from '../img/upgrade/desktop.jpg';

export function markupHero(results) {
  let result = results[Math.round(Math.random() * (results.length - 1))];
  let path = '';
  
  if (!result) {
    result = { original_title: 'Let’s Make Your Own Cinema',
      overview: `Is a guide to creating a personalized movie theater experience. 
        You'll need a projector, screen, and speakers. Decorate your space, choose your 
        films, and stock up on snacks for the full experience.`,
      vote_average: '',
      id: ''
    };
    path = desktop;
  }

  const { backdrop_path,

    original_title = '',
    overview = '',
    vote_average = '',
    id } = result;
  
  path = `https://image.tmdb.org/t/p/original${backdrop_path}`;      
  let rating = '';
          for (let i = 1; i <= 5; i++) {
            let ratingClass = 'fa-star-o';
            if (i * 2 <= vote_average) {
              ratingClass = 'fa-star';
            } else if (i * 2 - 1 <= vote_average) {
              ratingClass = 'fa-star-half-o';
            }
            rating += `<span class="fa star ${ratingClass}"> </span>`;
          }
        return `<div class="hero__discription">

            <h2 class="hero__title">${original_title}</h2>
            <p class="hero__rating">${rating}</p>
            <p class="hero__text">${overview}</p>
            <button id="watch-trailter__btn" class="hero__btn watch-trailer " data-id="${id}" type="button">Watch trailer</button>
            </div>
            <div class="hero__backgr" id="${id}">
            <img src='${path}' loading="lazy" alt="${overview}" class="hero__img" />
            </div>`;
}

