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
    path = `../img/upgrade/desktop.jpg;`;
  }

  const { backdrop_path,
    original_title = '',
    overview = '',
    vote_average = '',
    id } = result;
  
  path = `https://image.tmdb.org/t/p/original${backdrop_path}`;      
  
        return `<div class="hero__discription">
            <h2 class="hero__title">${original_title}</h2>
            <p class="hero__rating">${vote_average}</p>
            <p class="hero__text">${overview}</p>
            <button class="hero__btn watch-trailer-dark-theme" type="button">Watch trailer</button>
            <div class="hero__slider">
            <button type="button">01</button>
            <button type="button">02</button>
            <button type="button">03</button>
            <button type="button">04</button>
            <button type="button">05</button>
            </div>
            </div>
            <div class="hero__backgr" id="${id}">
            <img src='${path}' loading="lazy" alt="${overview}" class="hero__img" />
            </div>`;
}


