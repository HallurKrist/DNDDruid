import { el } from "./helpers";



export function loadDetails(event) {
  //get src element
  var srcElem = event.srcElement;

  //find the card that was clicked
  while (!srcElem.classList.contains('card')) {
    srcElem = srcElem.parentElement;
  }

  //find what beast was clicked
  const beastName = srcElem.innerText;

  //get all beasts data
  const allData = JSON.parse(window.localStorage.getItem('DNDDruidBeasts'));

  //find correct beasts data from all data
  var beastData;
  for (var beast of allData) {
    if (beast.title === beastName) {
      beastData = beast;
    }
  }

  window.localStorage.setItem('DetailsPageBeast', JSON.stringify(beastData));
}


export function makeDetails(parentElem) {
  const details = el('div', 'beastDetails');

  makeTop(details);
  makeMid(details);
  makeBot(details);

  parentElem.appendChild(details);
}

function makeTop(parent) {
  const info = el('div', 'top');

  makeTopTop(info);
  makeTopBot(info);
  
  parent.appendChild(info);
}

function makeMid(parent) {
  const skills = el('div', 'skills');

  //make skills


  parent.appendChild(skills);
}


function makeBot(parent) {
  const actions = el('div', 'actions');

  const data = JSON.parse(window.localStorage.getItem('DetailsPageBeast'));

  //make actions
  var actionKeys = Object.keys(data.contents.Actions);
  var actionValues = Object.values(data.contents.Actions);

  const title = el('h1', 'action_title');
  title.appendChild(document.createTextNode('Actions'));

  actions.appendChild(title);


  var i;
  for (i = 0; i < actionKeys.length; i++) {
    var action =  el('div', 'action');
    var name =    el('h2', 'action_name');
    var effect =  el('p', 'action_effect');

    action.appendChild(name);
    action.appendChild(effect);

    name.appendChild(document.createTextNode(`${actionKeys[i]}`));
    effect.appendChild(document.createTextNode(`${actionValues[i]}`));

    actions.appendChild(action);
  }

  parent.appendChild(actions);
}

function makeTopTop(parent) {
  const infoTop = el('div', 'top_top');

  makeTopTopLeft(infoTop);
  makeTopTopRight(infoTop);

  parent.appendChild(infoTop)
}

function makeTopBot(parent) {
  const infoBot = el('div', 'top_bot');

  const data = JSON.parse(window.localStorage.getItem('DetailsPageBeast')).contents;

  const left  = el('div', 'top_bot_left');
  const mid   = el('div', 'top_bot_mid');
  const right = el('div', 'top_bot_right');

  const ac    = el('div', 'top_bot_text');
  const hp    = el('div', 'top_bot_text');
  const speed = el('div', 'top_bot_text');
  const str   = el('div', 'top_bot_text');
  const dex   = el('div', 'top_bot_text');
  const con   = el('div', 'top_bot_text');
  const int   = el('div', 'top_bot_text');
  const wis   = el('div', 'top_bot_text');
  const cha   = el('div', 'top_bot_text');

  ac.appendChild(document.createTextNode(`AC: ${data['Armor class']}`));
  hp.appendChild(document.createTextNode(`HP: ${data['Hit points']}`));
  speed.appendChild(document.createTextNode(`SP: ${data['Speed']}`));

  var dndstat = data.dndstats;
  const splitDNDstat = dndstat.split("|");

  str.appendChild(document.createTextNode(`STR: ${splitDNDstat[0]}`));
  dex.appendChild(document.createTextNode(`DEX: ${splitDNDstat[1]}`));
  con.appendChild(document.createTextNode(`CON: ${splitDNDstat[2]}`));
  int.appendChild(document.createTextNode(`INT: ${splitDNDstat[3]}`));
  wis.appendChild(document.createTextNode(`WIS: ${splitDNDstat[4]}`));
  cha.appendChild(document.createTextNode(`CHA: ${splitDNDstat[5]}`));

  left.appendChild(ac);
  left.appendChild(hp);
  left.appendChild(speed);
  mid.appendChild(str);
  mid.appendChild(dex);
  mid.appendChild(con);
  right.appendChild(int);
  right.appendChild(wis);
  right.appendChild(cha);

  infoBot.appendChild(left);
  infoBot.appendChild(mid);
  infoBot.appendChild(right);

  parent.appendChild(infoBot);
}

function makeTopTopLeft(parent) {
  const image = el('div', 'top_top_imageBox');
  const theImg = el('img', 'top_top_image');

  const data = JSON.parse(window.localStorage.getItem('DetailsPageBeast'));

  theImg.setAttribute('src', `img/${data.title}.jpg`)

  image.appendChild(theImg);
  
  parent.appendChild(image);
}

function makeTopTopRight(parent) {
  const infoRight = el('div', 'top_top_right');

  const data = JSON.parse(window.localStorage.getItem('DetailsPageBeast'));

  const name = el('div', 'top_top_text');
  const cr   = el('div', 'top_top_text');
  const size = el('div', 'top_top_text');

  name.appendChild(document.createTextNode(`Beast: ${data.title}`));
  cr.appendChild(document.createTextNode(`CR: ${data.CR}`));
  size.appendChild(document.createTextNode(`Size: ${data.contents.size}`));

  infoRight.appendChild(name);
  infoRight.appendChild(cr);
  infoRight.appendChild(size);


  parent.appendChild(infoRight);
}