import { nameGenres } from './nameGenres';

export function markup(results) {
 
  const markupCard = results.map(
      ({
        poster_path,
        original_title = '',
        genre_ids,
        overview = '',
        release_date = '',
        vote_average = '',
        id
      }) => {
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
      // let rating = vote_average.toFixed(1);
        return `<li class="card__item list" id="${id}">
            <img src='${path}' loading="lazy" alt="${overview}" class="card__img" />
            <div class="container-info" data-modal-open="modal-1">
            <h2 class="card__title">${original_title}</h2>
            <p class="card__desc">${nameGenres(genre_ids).join(', ')} | ${releaseDate}</p>
            <p class="card__rating">${rating}</p>
            </div>
            </li>`;
      }
    )
    .join('');

  return markupCard;
}        