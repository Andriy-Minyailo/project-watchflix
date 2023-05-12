export default class Loader {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init = () => {
    this.hide();
    this.element.innerHTML = this.getLoader();
  };

  getLoader = () => {
    return '<div class="load-align"><div class="film"><span></span><span></span><span></span><span></span></div><div class="film"><span></span><span></span><span></span><span></span></div></div>	';
  };

  show = () => {
    this.element.classList.remove('hidden');
  };

  hide = () => {
    this.element.classList.add('hidden');
  };
}
