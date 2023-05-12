!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire1827;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire1827=o),o.register("iE7OH",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("gVa74",(function(e,r){var n=o("bpxeT"),a=o("2TvXO"),i=o("cFGTe"),c=o("k7KPL"),s=o("4hf9a"),l={hero:document.getElementById("hero")},u=new(0,i.RequestServer);function d(){return(d=t(n)(t(a).mark((function e(){var r,n,o,i,d,p,f,h;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.trendingDay();case 3:r=e.sent,n=r.data.results,o=n,i=(0,c.markupHero)(o),l.hero.innerHTML=i,(0,s.applyWatchTraileListener)(),d=document.querySelector(".hero__discription"),p=document.querySelector(".hero__title"),f=document.querySelector(".hero__text"),h=document.querySelector(".switcher"),"true"===localStorage.getItem("isLight")&&(d.classList.add("hero__discription-light"),p.classList.add("hero__title-light"),f.classList.add("hero__text-light")),h.addEventListener("click",(function(){d.classList.toggle("hero__discription-light"),p.classList.toggle("hero__title-light"),f.classList.toggle("hero__text-light")})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}!function(){d.apply(this,arguments)}()})),o.register("k7KPL",(function(r,n){e(r.exports,"markupHero",(function(){return i}));var a=o("9dSW6");function i(e){var r=e[Math.round(Math.random()*(e.length-1))],n="";r||(r={original_title:"Let’s Make Your Own Cinema",overview:"Is a guide to creating a personalized movie theater experience. \n        You'll need a projector, screen, and speakers. Decorate your space, choose your \n        films, and stock up on snacks for the full experience.",vote_average:"",id:""},n=t(a));var o=r.backdrop_path,i=r.original_title,c=void 0===i?"":i,s=r.overview,l=void 0===s?"":s,u=r.vote_average,d=void 0===u?"":u,p=r.id;n="https://image.tmdb.org/t/p/original".concat(o);for(var f="",h=1;h<=5;h++){var g="fa-star-o";2*h<=d?g="fa-star":2*h-1<=d&&(g="fa-star-half-o"),f+='<span class="fa star '.concat(g,'"> </span>')}return'<div class="hero__discription">\n\n            <h2 class="hero__title">'.concat(c,'</h2>\n            <p class="hero__rating">').concat(f,'</p>\n            <p class="hero__text">').concat(l,'</p>\n            <button id="watch-trailter__btn" class="hero__btn watch-trailer " data-id="').concat(p,'" type="button">Watch trailer</button>\n            </div>\n            <div class="hero__backgr" id="').concat(p,"\">\n            <img src='").concat(n,'\' loading="lazy" alt="').concat(l,'" class="hero__img" />\n            </div>')}})),o.register("9dSW6",(function(e,t){e.exports=o("aNJCr").getBundleURL("hfX1u")+o("iE7OH").resolve("6dCFz")})),o.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o.register("4hf9a",(function(r,n){e(r.exports,"applyWatchTraileListener",(function(){return f}));var a=o("bpxeT"),i=o("2TvXO"),c=o("cFGTe"),s=o("PIsXK"),l=(document.querySelector('[data-modal="modal-2"]'),new(0,c.RequestServer));function u(e){return d.apply(this,arguments)}function d(){return(d=t(a)(t(i).mark((function e(r){var n,a,o,c,u,d,f,h,g;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=r.currentTarget.getAttribute("data-id"),e.next=4,l.movieTrailer(n);case 4:a=e.sent,o=a.data.results,(c=o[0])&&(u=document.getElementsByClassName("modal-no-trailer")[0],d=document.getElementsByClassName("modal-trailer")[0],f='<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/'.concat(c.key,'" title="').concat(c.name,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),d.innerHTML=f,u.classList.add("is-hidden"),d.classList.remove("is-hidden")),h=document.querySelector(".modal-trailer"),g=document.querySelector(".switcher"),"true"===localStorage.getItem("isLight")&&h.classList.add("modal-trailer-light"),g.addEventListener("click",(function(){h.classList.toggle("modal-trailer-light")})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:return e.prev=18,(0,s.modalListener)("modal-2",p),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})))).apply(this,arguments)}function p(){var e=document.getElementsByClassName("modal-trailer")[0],t=document.getElementsByClassName("modal-no-trailer")[0];e.innerHTML="",null==t||t.classList.remove("is-hidden"),null==e||e.classList.add("is-hidden")}function f(){document.getElementById("watch-trailter__btn").addEventListener("click",u)}})),o.register("1KhuP",(function(t,r){e(t.exports,"markup",(function(){return a}));var n=o("3qwTJ");function a(e){return e.map((function(e){var t,r=e.poster_path,a=e.original_title,o=void 0===a?"":a,i=e.genre_ids,c=e.overview,s=void 0===c?"":c,l=e.release_date,u=void 0===l?"":l,d=e.vote_average,p=void 0===d?"":d,f=e.id;t=u?u.substring(0,4):"no date";var h="https://image.tmdb.org/t/p/w500".concat(r);r||(h="https://picsum.photos/500/750");for(var g="",v=1;v<=5;v++){var m="fa-star-o";2*v<=p?m="fa-star":2*v-1<=p&&(m="fa-star-half-o"),g+='<span class="fa star '.concat(m,'"> </span>')}return'<li class="card__item list" id="'.concat(f,"\">\n            <img src='").concat(h,'\' loading="lazy" alt="').concat(s,'" class="card__img" />\n            <div class="container-info" data-modal-open="modal-1">\n            <h2 class="card__title">').concat(o,'</h2>\n            <p class="card__desc">').concat((0,n.nameGenres)(i).join(", ")," | ").concat(t,'</p>\n            <p class="card__rating">').concat(g,"</p>\n            </div>\n            </li>")})).join("")}})),o.register("3qwTJ",(function(r,n){e(r.exports,"requestGenre",(function(){return l})),e(r.exports,"nameGenres",(function(){return d}));var a,i=o("bpxeT"),c=o("2TvXO"),s=new(0,o("cFGTe").RequestServer);function l(){return u.apply(this,arguments)}function u(){return(u=t(i)(t(c).mark((function e(){var r,n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.movieGenre();case 3:r=e.sent,n=r.data.genres,a=n.reduce((function(e,t){var r=t.id,n=t.name;return e[r]=n,e}),{}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){var t=e.map((function(e){return a[e]}));return t.length>2?t.splice(2):0===t.length&&t.push("no genres"),t}})),o.register("7F1pg",(function(e,t){})),o("iE7OH").register(JSON.parse('{"hfX1u":"index.a695d52f.js","6dCFz":"desktop.a15d7519.jpg"}'))}();
//# sourceMappingURL=index.a695d52f.js.map
