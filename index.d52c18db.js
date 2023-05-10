!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire1827;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire1827=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("gVa74",(function(e,n){var r=a("bpxeT"),o=a("2TvXO"),i=a("cFGTe"),c=a("k7KPL"),s=a("4hf9a"),u={hero:document.getElementById("hero")},l=new(0,i.RequestServer);function d(){return(d=t(r)(t(o).mark((function e(){var n,r,a,i,d,p,m,v;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.trendingDay();case 3:n=e.sent,r=n.data.results,a=r,i=(0,c.markupHero)(a),u.hero.innerHTML=i,(0,s.applyWatchTraileListener)(),d=document.querySelector(".hero__discription"),p=document.querySelector(".hero__title"),m=document.querySelector(".hero__text"),v=document.querySelector(".switcher"),"true"===localStorage.getItem("isLight")&&(d.classList.add("hero__discription-light"),p.classList.add("hero__title-light"),m.classList.add("hero__text-light")),v.addEventListener("click",(function(){d.classList.toggle("hero__discription-light"),p.classList.toggle("hero__title-light"),m.classList.toggle("hero__text-light")})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}!function(){d.apply(this,arguments)}()})),a.register("k7KPL",(function(n,r){e(n.exports,"markupHero",(function(){return i}));var o=a("9dSW6");function i(e){var n=e[Math.round(Math.random()*(e.length-1))],r="";n||(n={original_title:"Let’s Make Your Own Cinema",overview:"Is a guide to creating a personalized movie theater experience. \n        You'll need a projector, screen, and speakers. Decorate your space, choose your \n        films, and stock up on snacks for the full experience.",vote_average:"",id:""},r=t(o));var a=n.backdrop_path,i=n.original_title,c=void 0===i?"":i,s=n.overview,u=void 0===s?"":s,l=n.vote_average,d=void 0===l?"":l,p=n.id;return r="https://image.tmdb.org/t/p/original".concat(a),'<div class="hero__discription">\n\n            <h2 class="hero__title">'.concat(c,'</h2>\n            <p class="hero__rating">').concat(d,'</p>\n            <p class="hero__text">').concat(u,'</p>\n            <button id="watch-trailter__btn" class="hero__btn watch-trailer " data-id="').concat(p,'" type="button">Watch trailer</button>\n            </div>\n            <div class="hero__backgr" id="').concat(p,"\">\n            <img src='").concat(r,'\' loading="lazy" alt="').concat(u,'" class="hero__img" />\n            </div>')}})),a.register("9dSW6",(function(e,t){e.exports=a("aNJCr").getBundleURL("hfX1u")+a("iE7OH").resolve("6dCFz")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a.register("4hf9a",(function(n,r){e(n.exports,"applyWatchTraileListener",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO"),c=a("cFGTe"),s=a("PIsXK"),u=(document.querySelector('[data-modal="modal-2"]'),new(0,c.RequestServer));function l(e){return d.apply(this,arguments)}function d(){return(d=t(o)(t(i).mark((function e(n){var r,o,a,c,l,d,m;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.currentTarget.getAttribute("data-id"),e.next=4,u.movieTrailer(r);case 4:o=e.sent,a=o.data.results,(c=a[0])&&(l=document.getElementsByClassName("modal-no-trailer")[0],d=document.getElementsByClassName("modal-trailer")[0],m='<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/'.concat(c.key,'" title="').concat(c.name,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),d.innerHTML=m,l.classList.add("is-hidden"),d.classList.remove("is-hidden")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,(0,s.modalListener)("modal-2",p),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}function p(){var e=document.getElementsByClassName("modal-trailer")[0],t=document.getElementsByClassName("modal-no-trailer")[0];e.innerHTML="",null==t||t.classList.remove("is-hidden"),null==e||e.classList.add("is-hidden")}function m(){document.getElementById("watch-trailter__btn").addEventListener("click",l)}})),a.register("lPfiu",(function(e,n){var r=a("bpxeT"),o=a("2TvXO"),i=a("cFGTe"),c=a("1KhuP"),s=a("3qwTJ"),u={weeklyCard:document.querySelector(".card")},l=new(0,i.RequestServer);function d(){return(d=t(r)(t(o).mark((function e(){var n,r,a;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.requestGenre)();case 3:return e.sent,e.next=6,l.trendingWeek();case 6:n=e.sent,r=n.data.results,a=(0,c.markup)(r.slice(0,3)),u.weeklyCard.innerHTML=a,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){d.apply(this,arguments)}()})),a.register("1KhuP",(function(t,n){e(t.exports,"markup",(function(){return o}));var r=a("3qwTJ");function o(e){return e.map((function(e){var t,n=e.poster_path,o=e.original_title,a=void 0===o?"":o,i=e.genre_ids,c=e.overview,s=void 0===c?"":c,u=e.release_date,l=void 0===u?"":u,d=e.vote_average,p=void 0===d?"":d,m=e.id;t=l?l.substring(0,4):"no date";var v="https://image.tmdb.org/t/p/w500".concat(n);n||(v="https://picsum.photos/500/750");var g=p.toFixed(1);return'<li class="card__item list" id="'.concat(m,"\">\n            <img src='").concat(v,'\' loading="lazy" alt="').concat(s,'" class="card__img" />\n            <div class="container-info">\n            <h2 class="card__title">').concat(a,'</h2>\n            <p class="card__desc">').concat((0,r.nameGenres)(i).join(", ")," | ").concat(t,'</p>\n            <p class="card__rating">').concat(g,"</p>\n            </div>\n            </li>")})).join("")}})),a.register("3qwTJ",(function(n,r){e(n.exports,"requestGenre",(function(){return u})),e(n.exports,"nameGenres",(function(){return d}));var o,i=a("bpxeT"),c=a("2TvXO"),s=new(0,a("cFGTe").RequestServer);function u(){return l.apply(this,arguments)}function l(){return(l=t(i)(t(c).mark((function e(){var n,r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.movieGenre();case 3:n=e.sent,r=n.data.genres,o=r.reduce((function(e,t){var n=t.id,r=t.name;return e[n]=r,e}),{}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){var t=e.map((function(e){return o[e]}));return t.length>2?t.splice(2):0===t.length&&t.push("no genres"),t}})),a.register("6yLno",(function(e,n){var r,o,i=a("bpxeT"),c=a("2TvXO"),s=a("cFGTe"),u=a("UL92Z"),l=(a("UL92Z"),a("UL92Z"),u=a("UL92Z"),document.querySelector("#upcoming-loading-message")),d=document.querySelector("#upcoming-no-data-message"),p=document.querySelector("#upcoming-error-message"),m=document.querySelector("#upcoming-movie"),v=document.querySelector("#upcoming-remind-btn"),g=new(0,s.RequestServer),f={addText:"Remind me",removeText:"Delete from my library",localMarkup:"",currentStateButton:!0},h=(o=t(i)(t(c).mark((function e(){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.newFilms();case 3:return n=e.sent,e.next=6,_(n);case 6:x(),T(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),x(),w();case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(){return o.apply(this,arguments)}),_=function(){var e=t(i)(t(c).mark((function e(n){var r,o,a,i,s,u,l,d,p,m,v,g,h,_,w,T,C,B,F;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.data.results,o=r.length){e.next=6;break}return x(),y(),e.abrupt("return");case 6:return a=r[Math.round(Math.random()*(o-1))],console.log(a.id),E(a.original_title),M(a.backdrop_path),b(a.release_date),L(a.vote_average,a.vote_count),S(a.popularity),e.next=15,k(a);case 15:q(a.overview),i=a.poster_path,s=a.original_title,u=void 0===s?"":s,l=a.overview,d=void 0===l?"":l,p=a.release_date,m=void 0===p?"":p,v=a.vote_average,g=void 0===v?"":v,O(h=a.id),_=document.querySelector("#upcoming-movie-genre"),w=_.innerText,T=w.split(",").slice(0,2),C=m?m.substring(0,4):"no date",B="https://image.tmdb.org/t/p/w500".concat(i),i||(B="https://picsum.photos/500/750"),F=g.toFixed(1),f.localMarkup={id:h,str:"<img src='".concat(B,'\' loading="lazy" alt="').concat(d,'" class="card__img" />\n            <div class="container-info">\n            <h2 class="card__title">').concat(u,'</h2>\n            <p class="card__desc">').concat(T," | ").concat(C,'</p>\n            <p class="card__rating">').concat(F,"</p>\n            </div>")},console.log(f.localMarkup);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){return l.classList.add("upcoming__status-message--hidden")},y=function(){return d.classList.remove("upcoming__status-message--hidden")},w=function(){return p.classList.remove("upcoming__status-message--hidden")},T=function(){m.classList.remove("upcoming__movie--hidden")},b=function(e){var t=document.querySelector("#upcoming-movie-release-date"),n=new Date(e).toLocaleDateString().replace(/\//g,".");t.innerText=n},L=function(e,t){var n=document.querySelector("#upcoming-vote-average"),r=document.querySelector("#upcoming-vote-count");n.innerText=e,r.innerText=t},S=function(e){document.querySelector("#upcoming-movie-popularity").innerText=e.toFixed(1)},k=function(){var e=t(i)(t(c).mark((function e(n){var r,o,a,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("#upcoming-movie-genre"),e.next=3,g.movieGenre();case 3:o=e.sent,a=o?n.genre_ids.map((function(e){return o.data.genres.find((function(t){return t.id===e}))})):[],i=a.map((function(e){return e.name})).join(", "),r.innerText=i||"-";case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){document.querySelector("#upcoming-movie-about").innerText=e},E=function(e){document.querySelector("#upcoming-movie-title").innerText=e},M=function(){var e=t(i)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector("#upcoming-movie-backdrop").src="https://image.tmdb.org/t/p/original".concat(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function O(e){var t=(0,u.getMovieList)(u.KEY_MOVIE_LIST);if(!t)return v.textContent=f.addText,void(f.currentStateButton=!0);-1!==(r=t.findIndex((function(t){return t.id===e})))?(v.textContent=f.removeText,f.currentStateButton=!1):(v.textContent=f.addText,f.currentStateButton=!0)}h(),console.log(undefined),v.addEventListener("click",(function(e){console.log(f.currentStateButton),f.currentStateButton?((0,u.loadMoveList)(f.localMarkup),f.currentStateButton=!1,v.textContent=f.removeText,console.log("add")):(!function(e){var t=(0,u.getMovieList)(u.KEY_MOVIE_LIST);if(1===t.length)return void localStorage.removeItem(u.KEY_MOVIE_LIST);t.splice(e,1),(0,u.saveMovieList)(u.KEY_MOVIE_LIST,t)}(r),f.currentStateButton=!0,v.textContent=f.addText,console.log("remove"))}))})),a.register("7F1pg",(function(e,t){})),a("iE7OH").register(JSON.parse('{"hfX1u":"index.d52c18db.js","6dCFz":"desktop.a15d7519.jpg"}'))}();
//# sourceMappingURL=index.d52c18db.js.map
