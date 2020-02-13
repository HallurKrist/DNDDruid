export function empty(element) {
 while (element.firstChild) {
   element.removeChild(element.firstChild);
 }
}

export function el(elType, elClass) {
 const element = document.createElement(`${elType}`);
 if (elClass !== null) {
   element.classList.add(`${elClass}`);
 }
 return element;
}
