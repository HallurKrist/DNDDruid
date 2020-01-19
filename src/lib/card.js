import {el} from './helpers';

export function makeCards(page) {
  const myData = JSON.parse(window.localStorage.getItem('DNDDruidBeasts'));

  const cards = el('div', 'row')
  cards.classList.add('cards')

  for (var beast of myData) {
    makeBeastCard(beast, cards);
  }

	page.appendChild(cards);
}

function makeBeastCard(beastData, parentElement) {
  //frummstilla
  const theCard = el('div', 'card');
  theCard.classList.add('col');
  theCard.classList.add('beast');
  const imageDiv = el('div', 'image');
  const textDiv = el('div', 'text');
  const theImage = el('img', 'img');
  const theTitle = el('h1', 'title');

  //samansetja
  imageDiv.appendChild(theImage);
  textDiv.appendChild(theTitle);
  theCard.appendChild(imageDiv);
  theCard.appendChild(textDiv);

  theTitle.appendChild(document.createTextNode(`${beastData.title}`));
  theImage.setAttribute('src', `${beastData.image}`);

  parentElement.appendChild(theCard);


}

{/* <div class="row cards">
        <div class="card col beast">
          <div class="image">
            <img class="img">
          </div>
          <div class="text">
            <h1 class="title"></h1>
          </div>
        </div>  
      </div> */}