
export function markupLocal(results) {
 
  const markupCardLocal = results.map( obj => {
    //   const [id] = Object.keys(obj);  
      return `<li class="card__item list" id="${obj.id}">${obj.str}</li>`;
      }
    )
    .join('');
  return markupCardLocal;
}        