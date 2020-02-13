import {el} from './helpers';
import {loadDetails} from './details';

export function makeCards(page, incData) {

  var myData;
  if (incData) {
    myData = incData;
  } else {
    myData = JSON.parse(window.localStorage.getItem('DNDDruidBeasts'));
  }

  const cards = el('div', 'row')
  cards.classList.add('cards')

  for (var beast of myData) {
    makeBeastCard(beast, cards);
  }

  for (var _card of cards.children) {
    _card.addEventListener('click', loadDetails);
  }

	page.appendChild(cards);
}

function makeBeastCard(beastData, parentElement) {
  //frummstilla
  const theCard = el('a', 'card');

  theCard.classList.add('beast');
  theCard.setAttribute('href', 'details.html');

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
  theImage.setAttribute('src', `img/${beastData.title}.jpg`);

  //setja 'i foreldri
  parentElement.appendChild(theCard);
}

{/* <div class="row cards">
        <div class="card beast">
          <div class="image">
            <img class="img">
          </div>
          <div class="text">
            <h1 class="title"></h1>
          </div>
        </div>  
      </div> */}