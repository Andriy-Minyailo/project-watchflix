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
      const noTrailerWrapper =
        document.getElementsByClassName('modal-no-trailer')[0];
      const trailerWrapper =
        document.getElementsByClassName('modal-trailer')[0];

      let html = `<iframe id="trailer-video-player" width="600" height="300" src="https://www.youtube.com/embed/${trailer.key}" title="${trailer.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      trailerWrapper.innerHTML = html;

      noTrailerWrapper.classList.add('is-hidden');
      trailerWrapper.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  } finally {
    modalListener('modal-2', onModalTrailerClose);
  }
}

function onModalTrailerClose() {
  const trailerWrapper = document.getElementsByClassName('modal-trailer')[0];
  const noTrailerWrapper =
    document.getElementsByClassName('modal-no-trailer')[0];
  trailerWrapper.innerHTML = '';
  noTrailerWrapper?.classList.remove('is-hidden');
  trailerWrapper?.classList.add('is-hidden');
}

export function applyWatchTraileListener() {
  const button = document.getElementById('watch-trailter__btn');
  button.addEventListener('click', handleTrailerClick);
}
