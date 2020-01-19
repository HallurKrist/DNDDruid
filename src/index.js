import {loadPage} from './lib/functions';

document.addEventListener('DOMContentLoaded', () => {


 fetch('https://raw.githubusercontent.com/HallurKrist/DNDDruid/master/Wild%20Shape%20Cards%20(Legal).json')
   .then((result) => {
     if (!result.ok) {
       throw new Error('Non 200 status');
     }
     return result.json();
   })
   .then((data) => {
    window.localStorage.setItem('DNDDruidBeasts', JSON.stringify(data));
     loadPage();
   })
   .catch((error) => console.error(error));
});