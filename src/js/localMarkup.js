
export function markupLocal(results) {
 
  const markupCardLocal = results.map( obj => {
    //   const [id] = Object.keys(obj);  
      return `<li class="card__item list" data-modal-open="modal-1" id="${obj.id}">${obj.str}</li>`;
      }
    )
    .join('');
  return markupCardLocal;
}        