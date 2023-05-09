export class LoadMoreButton {
    constructor({ isHiden, active, buttonAdress }) {
        this.isHiden = isHiden;
        this.active = active;
         this.buttonAdress = buttonAdress;
    }
    buttonState({ isHiden = this.isHiden, active = this.active }) {
        isHiden ? this.buttonAdress.classList.add('visually-hidden') : this.buttonAdress.classList.remove('visually-hidden');
        active ? this.active = true : this.active = false;
    }
}