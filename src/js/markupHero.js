export function markupHero(results) {
  console.log(results[2]);
  const {
    backdrop_path,
    poster_path,
    original_title = '',
    overview = '',
    release_date = '',
    vote_average = '',
    id,
  } = results[1];
  let releaseDate;
  if (!release_date) {
    releaseDate = 'no date';
  } else {
    releaseDate = release_date.substring(0, 4);
  }
  let path = `https://image.tmdb.org/t/p/w500${poster_path}`;
  if (!poster_path) {
    path = 'https://picsum.photos/500/750';
  }
  let rating = vote_average.toFixed(1);
  return `<div class="hero__discription">
            <h2 class="hero__title">${original_title}</h2>
            <p class="hero__rating">${rating}</p>
            <p class="hero__text">${overview}</p>
            <button id="watch-trailter__btn" data-id="${id}" class="hero__btn" type="button">Watch trailer</button>
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
