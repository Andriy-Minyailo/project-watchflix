// import lightBtnClose from '../../svg/close.svg'
// import darkBtnClose from '../../svg/Vector.svg'

// const LightSwitcher = document.querySelector(".switcher");
// let isLight = localStorage.getItem('isLight') || false;
// const colorClass = "light"



// const utils = {
//     btnCls: findOneElement(".img-cls"),
//     popupContent: findOneElement(".popup__content"),
//     modalInfo: findOneElement(".modal__info"),
//     modalAbout: findOneElement(".modal-info__about"),
//     vote: findOneElement("._vote"),
//     votes: findOneElement("._votes"),
//     textLeft: findElements(".text-left"),
//     addToLocalStoradge: findOneElement(".add-to-my-library-black-btn-dark-theme"),
// }


// if (isLight === 'true') {
    // document.body.classList.add('light');
    changeColorElementToLight()
// } else {
//     deleteClassList(utils.popupContent, colorClass)
// }


// LightSwitcher.addEventListener("click", function() {
//     isLight ? changeColorElementToLight() : changeColorElementToDark()
// })


// function changeColorElementToLight() {
//     utils.btnCls.src = darkBtnClose;
    
//     addClassList(utils.popupContent, colorClass);
//     addClassList(utils.modalInfo, colorClass);
//     addClassList(utils.modalAbout, colorClass);
//     addClassList(utils.vote, colorClass);
//     addClassList(utils.votes, colorClass);
//     addClassList(utils.addToLocalStoradge, colorClass);

//     [...utils.textLeft].map(item => addClassList(item, colorClass))
// }

// function changeColorElementToDark() {
//     utils.btnCls.src = lightBtnClose;
//     deleteClassList(utils.popupContent, colorClass);
//     deleteClassList(utils.modalInfo, colorClass);
//     deleteClassList(utils.modalAbout, colorClass);
//     deleteClassList(utils.vote, colorClass);
//     deleteClassList(utils.votes, colorClass);
//     deleteClassList(utils.addToLocalStoradge, colorClass);
//     [...utils.textLeft].map(item => deleteClassListdeleteClassList(item, colorClass))
// }


// function addClassList(element, className) {
//     element.classList.add(className)
// }
// function deleteClassList(element, className) {
//     element.classList.remove(className)
// }


// function findOneElement(selector) {
//     return document.querySelector(selector)
// }
// function findElements(selector) {
//     return document.querySelectorAll(selector)
// }