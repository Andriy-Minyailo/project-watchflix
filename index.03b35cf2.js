var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire1827;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequire1827=o),o("bTcpz"),o("hYpm4"),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");function o(){e.classList.toggle("visually-hidden")}t.addEventListener("click",o),n.addEventListener("click",o)})(),o("eEHR3");var r=o("hY6V0"),c=o("3huUq"),i=o("7o4ng");const a={weeklyCard:document.querySelector(".card")},s=new(0,r.RequestServer);!async function(){try{await(0,i.requestGenre)();const e=await s.trendingWeek(),{results:t}=e.data,n=(0,c.markup)(t.slice(0,3));a.weeklyCard.innerHTML=n}catch(e){console.log(e)}}();r=o("hY6V0");var u=o("31u3U");o("31u3U"),o("31u3U"),u=o("31u3U");const l=document.querySelector("#upcoming-loading-message"),d=document.querySelector("#upcoming-no-data-message"),m=document.querySelector("#upcoming-error-message"),g=document.querySelector("#upcoming-movie"),p=document.querySelector("#upcoming-remind-btn"),v=new(0,r.RequestServer);let y;const _={addText:"Remind me",removeText:"Delete from my library",localMarkup:"",currentStateButton:!0},S=async e=>{const t=e.data.results,n=t.length;if(!n)return f(),void x();const o=t[Math.round(Math.random()*(n-1))];console.log(o.id),E(o.original_title),b(o.backdrop_path),T(o.release_date),w(o.vote_average,o.vote_count),L(o.popularity),await M(o),k(o.overview);const{poster_path:r,original_title:c="",overview:i="",release_date:a="",vote_average:s="",id:l}=o;!function(e){const t=(0,u.getMovieList)(u.KEY_MOVIE_LIST);if(!t)return p.textContent=_.addText,void(_.currentStateButton=!0);y=t.findIndex((t=>t.id===e)),-1!==y?(p.textContent=_.removeText,_.currentStateButton=!1):(p.textContent=_.addText,_.currentStateButton=!0)}(l);const d=document.querySelector("#upcoming-movie-genre").innerText.split(",").slice(0,2);let m;m=a?a.substring(0,4):"no date";let g=`https://image.tmdb.org/t/p/w500${r}`;r||(g="https://picsum.photos/500/750");let v=s.toFixed(1);_.localMarkup={id:l,str:`<img src='${g}' loading="lazy" alt="${i}" class="card__img" />\n            <div class="container-info">\n            <h2 class="card__title">${c}</h2>\n            <p class="card__desc">${d} | ${m}</p>\n            <p class="card__rating">${v}</p>\n            </div>`},console.log(_.localMarkup)},f=()=>l.classList.add("upcoming__status-message--hidden"),x=()=>d.classList.remove("upcoming__status-message--hidden"),h=()=>m.classList.remove("upcoming__status-message--hidden"),q=()=>{g.classList.remove("upcoming__movie--hidden")},T=e=>{const t=document.querySelector("#upcoming-movie-release-date"),n=new Date(e).toLocaleDateString().replace(/\//g,".");t.innerText=n},w=(e,t)=>{const n=document.querySelector("#upcoming-vote-average"),o=document.querySelector("#upcoming-vote-count");n.innerText=e,o.innerText=t},L=e=>{document.querySelector("#upcoming-movie-popularity").innerText=e.toFixed(1)},M=async e=>{const t=document.querySelector("#upcoming-movie-genre"),n=await v.movieGenre(),o=(n?e.genre_ids.map((e=>n.data.genres.find((t=>t.id===e)))):[]).map((e=>e.name)).join(", ");t.innerText=o||"-"},k=e=>{document.querySelector("#upcoming-movie-about").innerText=e},E=e=>{document.querySelector("#upcoming-movie-title").innerText=e},b=async e=>{document.querySelector("#upcoming-movie-backdrop").src=`https://image.tmdb.org/t/p/original${e}`};(async()=>{try{const e=await v.newFilms();await S(e),f(),q()}catch(e){console.error(e),f(),h()}})(),console.log(undefined),p&&p.addEventListener("click",(function(e){console.log(_.currentStateButton),_.currentStateButton?((0,u.loadMoveList)(_.localMarkup),_.currentStateButton=!1,p.textContent=_.removeText,console.log("add")):(!function(e){const t=(0,u.getMovieList)(u.KEY_MOVIE_LIST);if(1===t.length)return void localStorage.removeItem(u.KEY_MOVIE_LIST);t.splice(e,1),(0,u.saveMovieList)(u.KEY_MOVIE_LIST,t)}(y),_.currentStateButton=!0,p.textContent=_.addText,console.log("remove"))})),o("jIklc"),o("8Yq9A");
//# sourceMappingURL=index.03b35cf2.js.map