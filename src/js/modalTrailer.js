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

      let html = `<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}" title="${trailer.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      trailerWrapper.innerHTML = html;

      noTrailerWrapper.classList.add('is-hidden');
      trailerWrapper.classList.remove('is-hidden');
    }

    const trailerModal = document.querySelector('.modal-trailer');
    let LightSwitcher = document.querySelector('.switcher');
    let isLight = localStorage.getItem('isLight');
    if (isLight === 'true') {
      trailerModal.classList.add('modal-trailer-light');
    }
    LightSwitcher.addEventListener('click', () => {
      trailerModal.classList.toggle('modal-trailer-light');
    });
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
