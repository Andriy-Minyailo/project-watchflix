var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequire1827;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire1827=a),a("bTcpz"),a("hYpm4");var n=a("hY6V0"),r=a("3huUq"),c=a("7o4ng");const l={cardContainer:document.querySelector(".card")},s=new(0,n.RequestServer);!async function(){try{await(0,c.requestGenre)();const e=await s.trendingWeek(),{results:t}=e.data,o=(0,r.markup)(t);l.cardContainer.innerHTML=o}catch(e){console.log(e)}}(),a("eEHR3"),a("jIklc");r=a("3huUq");const i=new(0,(n=a("hY6V0")).RequestServer),u=document.querySelector("#catalog-search-form"),d=document.querySelector("#catalog-search-input"),m=document.querySelector("#catalog-year-select"),g=document.querySelector("#catalog-genre-select"),y=document.querySelector("#catalog-country-select"),h=document.querySelector("#catalog-list"),f=document.querySelector("#catalog-not-found-message"),p=document.querySelector("#catalog-error-message");let v=1,S={searchQuery:void 0,year:void 0,genre:void 0,country:void 0};const q={hideClassName:"catalog__list--hidden",show(){h.classList.remove(this.hideClassName)},hide(){h.classList.add(this.hideClassName)}},w={hideClassName:"catalog__message--hidden",show(){f.classList.remove(this.hideClassName)},hide(){f.classList.add(this.hideClassName)}},_={hideClassName:"catalog__message--hidden",show(){p.classList.remove(this.hideClassName)},hide(){p.classList.add(this.hideClassName)}},C=(e,t,o)=>{const a=document.createElement("option");a.value=t,a.innerHTML=o??t,e.append(a)};const L=async e=>{try{const t=(e=>{const t=e.searchQuery,o=e.year,a=e.genre,n=e.country;let r="";return t&&(r+=t),o&&(r+=`&year=${o}`),a&&(r+=`&genre=${a}`),n&&(r+=`&country=${n}`),r})(e);return(await i.searchMovies(t)).data.results}catch(e){console.log(e),q.hide(),_.show()}},b=async e=>{if(e.length){const t=(0,r.markup)(e);_.hide(),w.hide(),h.innerHTML=t,q.show()}else q.hide(),w.show()};(()=>{for(let e=(new Date).getFullYear();e>=2e3;e--)C(m,e)})(),(async()=>{(await i.movieGenre()).data.genres.forEach((e=>C(g,e.id,e.name)))})(),u.addEventListener("submit",(async e=>{e.preventDefault(),S={searchQuery:d.value,year:document.querySelector("#catalog-year-select").value,genre:document.querySelector("#catalog-genre-select").value,country:document.querySelector("#catalog-country-select").value};const t=await L(S);(()=>{const e="catalog__search-form-input--hidden";m.classList.remove(e),g.classList.remove(e),y.classList.remove(e)})(),b(t)})),pagination.on("afterMove",(async e=>{v=e.page;const t=await L(S);await b(t)}));const N=new(0,(n=a("hY6V0")).RequestServer),x=(document.querySelector(".wrapper"),{cardsInfo:[],localStorage:M("my-library")?function(e){try{return JSON.parse(e)}catch(e){console.log(e)}}(M("my-library")):[]});function T(e,t){return e.closest(t).dataset.id}function E(e,t){localStorage.setItem(e,t)}function M(e){localStorage.getItem(e)}function k(e){try{return JSON.stringify(e)}catch(e){console.log(e)}}console.log("text",x.localStorage),0==x.localStorage.length&&E("my-library",k([])),a("6pZM0"),a("OcCik"),a("eEHR3"),a("iagwT"),a("8GYDQ"),a("6pZM0"),a("jIklc"),a("8Yq9A"),async function(e=603692){const t=await async function(e){const t=await N.movieDetails(e),{data:o}=t;return o}(e);console.log("DATA",t),x.cardsInfo.push(t),await function(e){const t=document.querySelector(".modal-card-info"),o=document.querySelector(".modal__img-modal-card-info"),a=document.querySelector(".modal-info__name"),n=document.querySelector("._vote"),r=document.querySelector("._votes"),c=document.querySelector(".modal-info-right__text-popoparity"),l=document.querySelector(".modal-info-right__text-genre"),s=document.querySelector(".modal-info-about__text-overwiew-about");console.log("Abount",s);const{id:i=603692,poster_path:u="/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",title:d="",vote_average:m="",vote_count:g="",popularity:y="",genres:h="",overview:f=""}=e;img="https://image.tmdb.org/t/p/original"+u,t.dataset.id=i,o.src=img,o.alt=d,a.textContent=d,n.textContent=m,r.textContent=g,c.textContent=y,l.textContent=[...h].map((e=>e.name)).join(" "),s.textContent=f}(t),await void document.querySelector(".btn__add-to-library").addEventListener("click",(function(e){const t=e.target;let o=null;"BUTTON"==t.tagName&&(o=T(t,".modal-card-info")),"SPAN"==t.tagName&&(o=T(t,".modal-card-info")),function(e){if(!x.localStorage.includes(e))return x.localStorage.push(e),!0}(+o)&&function(e,t){E(e,k(t))}("my-library",x.localStorage)}))}(603692);
//# sourceMappingURL=catalog.cc2cb3d4.js.map