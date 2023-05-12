import { RequestServer } from './requestServer';
import { modalListener } from './modals-open-close';
import Loader from './loaderSpinner';

const ref = {
  modal: document.querySelector(`[data-modal="modal-2"]`),
};
const requestServer = new RequestServer();

async function handleTrailerClick(e) {
  modalListener('modal-2', onModalTrailerClose);
  const loaderWrapper = document.getElementsByClassName('loader-wrapper')[0];
  const noTrailerWrapper =
    document.getElementsByClassName('modal-no-trailer')[0];
  const trailerWrapper = document.getElementsByClassName('modal-trailer')[0];
  const loader = new Loader(loaderWrapper);

  noTrailerWrapper.classList.add('hidden');
  loader.show();

  try {
    const movieId = e.currentTarget.getAttribute('data-id');
    const response = await requestServer.movieTrailer(movieId);
    const { results } = response.data;
    const trailer = results[0];

    if (trailer) {
      let html = `<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}" title="${trailer.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      trailerWrapper.innerHTML = html;

      setTimeout(() => {
        loader.hide();
        trailerWrapper.classList.remove('hidden');
      }, 1000);
    } else {
      loader.hide();
      noTrailerWrapper.classList.remove('hidden');
      trailerWrapper.classList.add('hidden');
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
  }
}

function onModalTrailerClose() {
  const trailerWrapper = document.getElementsByClassName('modal-trailer')[0];
  const noTrailerWrapper =
    document.getElementsByClassName('modal-no-trailer')[0];
  trailerWrapper.innerHTML = '';
  noTrailerWrapper?.classList.remove('hidden');
  trailerWrapper?.classList.add('hidden');
}

export function applyWatchTraileListener() {
  const button = document.getElementById('watch-trailter__btn');
  button.addEventListener('click', handleTrailerClick);
}
