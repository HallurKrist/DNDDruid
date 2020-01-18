

document.addEventListener('DOMContentLoaded', () => {
 const page = document.querySelector('body');
 const isLecturePage = page.classList.contains('lecture-page');

 fetch('https://raw.githubusercontent.com/HallurKrist/DNDDruid/master/Wild%20Shape%20Cards%20(Legal).json')
   .then((result) => {
     if (!result.ok) {
       throw new Error('Non 200 status');
     }
     return result.json();
   })
   .then((data) => {
     debugger;
   })
   .catch((error) => console.error(error));
});