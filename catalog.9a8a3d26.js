!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire1827;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire1827=o),o("5xtVg"),o("3VTKu");var a=o("bpxeT"),c=o("2TvXO"),u=o("cFGTe"),s=o("1KhuP"),i=o("3qwTJ"),l={cardContainer:document.querySelector(".card")},d=new(0,u.RequestServer);function f(){return(f=e(a)(e(c).mark((function t(){var n,r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.requestGenre)();case 3:return e.sent,e.next=6,d.trendingWeek();case 6:n=e.sent,r=n.data.results,o=(0,s.markup)(r),l.cardContainer.innerHTML=o,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){f.apply(this,arguments)}(),o("gVa74"),o("cbP8w");a=o("bpxeT"),c=o("2TvXO"),s=o("1KhuP");var p,v=new(0,(u=o("cFGTe")).RequestServer),m=document.querySelector("#catalog-search-form"),h=document.querySelector("#catalog-search-input"),g=document.querySelector("#catalog-year-select"),y=document.querySelector("#catalog-genre-select"),x=document.querySelector("#catalog-country-select"),w=document.querySelector("#catalog-list"),S=document.querySelector("#catalog-not-found-message"),q=document.querySelector("#catalog-error-message"),_={searchQuery:void 0,year:void 0,genre:void 0,country:void 0},b={hideClassName:"catalog__list--hidden",show:function(){w.classList.remove(this.hideClassName)},hide:function(){w.classList.add(this.hideClassName)}},T={hideClassName:"catalog__message--hidden",show:function(){S.classList.remove(this.hideClassName)},hide:function(){S.classList.add(this.hideClassName)}},L={hideClassName:"catalog__message--hidden",show:function(){q.classList.remove(this.hideClassName)},hide:function(){q.classList.add(this.hideClassName)}},C=function(e,t,n){var r=document.createElement("option");r.value=t,r.innerHTML=null!=n?n:t,e.append(r)},N=(p=e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.movieGenre();case 2:e.sent.data.genres.forEach((function(e){return C(y,e.id,e.name)}));case 4:case"end":return e.stop()}}),t)}))),function(){return p.apply(this,arguments)}),k=function(e){var t=e.searchQuery,n=e.year,r=e.genre,o=e.country,a="";return t&&(a+=t),n&&(a+="&year=".concat(n)),r&&(a+="&genre=".concat(r)),o&&(a+="&country=".concat(o)),a},P=function(){var t=e(a)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=k(n),e.next=4,v.searchMovies(r);case 4:return o=e.sent,e.abrupt("return",o.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),b.hide(),L.show();case 13:case"end":return e.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.length?(r=(0,s.markup)(n),L.hide(),T.hide(),w.innerHTML=r,b.show()):(b.hide(),T.show());case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=(function(){var t=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.target.dataset.page,e.next=3,P();case 3:return r=e.sent,e.next=6,E(r);case 6:case"end":return e.stop()}}),t)})))}(),function(){var t=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),_={searchQuery:h.value,year:document.querySelector("#catalog-year-select").value,genre:document.querySelector("#catalog-genre-select").value,country:document.querySelector("#catalog-country-select").value},e.next=4,P(_);case 4:r=e.sent,t=void 0,t="catalog__search-form-input--hidden",g.classList.remove(t),y.classList.remove(t),x.classList.remove(t),E(r);case 7:case"end":return e.stop()}var t}),t)})));return function(e){return t.apply(this,arguments)}}());!function(){for(var e=(new Date).getFullYear();e>=2e3;e--)C(g,e)}(),N(),m.addEventListener("submit",O),pagination.on("afterMove",function(){var t=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.page,e.next=3,P(_);case 3:return r=e.sent,e.next=6,E(r);case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());a=o("bpxeT");var F=o("8nrFW"),M=(c=o("2TvXO"),new(0,(u=o("cFGTe")).RequestServer)),D=(document.querySelector(".wrapper"),"my-library"),I={cardsInfo:[],localStorage:V(D)?function(e){try{return JSON.parse(e)}catch(e){console.log(e)}}(V(D)):[]};function G(e){return J.apply(this,arguments)}function J(){return(J=e(a)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.movieDetails(n);case 2:return r=e.sent,o=r.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function K(){return K=e(a)(e(c).mark((function t(){var n,r,o=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:603692,e.next=3,G(n);case 3:return r=e.sent,console.log("DATA",r),I.cardsInfo.push(r),e.next=8,R(r);case 8:return e.next=10,X();case 10:case"end":return e.stop()}}),t)}))),K.apply(this,arguments)}function R(t){var n=document.querySelector(".modal-card-info"),r=document.querySelector(".modal__img-modal-card-info"),o=document.querySelector(".modal-info__name"),a=document.querySelector("._vote"),c=document.querySelector("._votes"),u=document.querySelector(".modal-info-right__text-popoparity"),s=document.querySelector(".modal-info-right__text-genre"),i=document.querySelector(".modal-info-about__text-overwiew-about");console.log("Abount",i);var l=t.id,d=void 0===l?603692:l,f=t.poster_path,p=void 0===f?"/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg":f,v=t.title,m=void 0===v?"":v,h=t.vote_average,g=void 0===h?"":h,y=t.vote_count,x=void 0===y?"":y,w=t.popularity,S=void 0===w?"":w,q=t.genres,_=void 0===q?"":q,b=t.overview,T=void 0===b?"":b;img="https://image.tmdb.org/t/p/original"+p,n.dataset.id=d,r.src=img,r.alt=m,o.textContent=m,a.textContent=g,c.textContent=x,u.textContent=S,s.textContent=e(F)(_).map((function(e){return e.name})).join(" "),i.textContent=T}function X(){document.querySelector(".btn__add-to-library").addEventListener("click",(function(e){var t,n,r=e.target,o=null;"BUTTON"==r.tagName&&(o=A(r,".modal-card-info")),"SPAN"==r.tagName&&(o=A(r,".modal-card-info")),function(e){if(!I.localStorage.includes(e))return I.localStorage.push(e),!0}(+o)&&(t=D,n=I.localStorage,U(t,j(n)))}))}function A(e,t){return e.closest(t).dataset.id}function U(e,t){localStorage.setItem(e,t)}function V(e){localStorage.getItem(e)}function j(e){try{return JSON.stringify(e)}catch(e){console.log(e)}}console.log("text",I.localStorage),0==I.localStorage.length&&U(D,j([])),o("PIsXK"),o("4hf9a"),o("gVa74"),o("lPfiu"),o("6yLno"),o("PIsXK"),o("cbP8w"),o("7F1pg"),function(){K.apply(this,arguments)}(603692)}();
//# sourceMappingURL=catalog.9a8a3d26.js.map