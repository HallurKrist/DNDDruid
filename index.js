

document.addEventListener('DOMContentLoaded', () => {
 const page = document.querySelector('body');
 const isLecturePage = page.classList.contains('lecture-page');

 fetch('https://drive.google.com/file/d/18tTF4zNNddHe-tyBOb_Q25DtjnTni02P/edit')
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