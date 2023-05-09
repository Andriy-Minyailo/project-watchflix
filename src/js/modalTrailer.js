import { RequestServer } from './requestServer';
import { modalListener } from './modals-open-close';

const ref = {
  modal: document.querySelector(`[data-modal="modal-2"]`),
};
const requestServer = new RequestServer();

async function handleTrailerClick(e) {
  try {
    const movieId = e.currentTarget.getAttribute('data-id');
    const response = await requestServer.movieTrailer(movieId);
    const { results } = response.data;
    const trailer = results[0];

    if (trailer) {
      const player = document.getElementById('trailer-video-player');
      const noTrailerWrapper =
        document.getElementsByClassName('modal-no-trailer')[0];
      const trailerWrapper =
        document.getElementsByClassName('modal-trailer')[0];

      let path = `https://www.youtube.com/embed/${trailer.key}`;
      player.setAttribute('src', path);
      player.setAttribute('title', trailer.name);
      noTrailerWrapper.classList.add('is-hidden');
      trailerWrapper.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  } finally {
    modalListener('modal-2');
  }
}

export function applyWatchTraileListener() {
  const button = document.getElementById('watch-trailter__btn');
  button.addEventListener('click', handleTrailerClick);
}
