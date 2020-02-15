import { empty } from './helpers';
import { makeCards } from './card';

var toBeDeleted = [];
const data = JSON.parse(window.localStorage.getItem('DNDDruidBeasts'));
var filterData;
var dataDoneFiltering = [];

export function filterCards() {
  filterData = JSON.parse(window.localStorage.getItem('filter'));

  toBeDeleted = [];
  dataDoneFiltering = [];

  filterCR();
  filterSize();
  filterSpeed();

  compressDeleted();
  deleteFiltered();

  const cards = document.querySelector('.cards');
  empty(cards);
  const thePage = cards.parentElement;
  thePage.removeChild(cards);

  if (dataDoneFiltering.length === 0) {
    if ((filterData.CR.length !== 0) || (filterData.Size.length !== 0) || (filterData.Speed.length !== 0)) {
      makeCards(thePage, dataDoneFiltering);
    }
  } else {
    makeCards(thePage, dataDoneFiltering);
  }
}

function filterCR() {
  if (filterData.CR && filterData.CR.length !== 0) {
    var j;
    for (j = 0; j < data.length; j++) {
      var thedata = data[j];
      if (!filterData.CR.includes(`${thedata.CR}-CR`)) {
        toBeDeleted.push(j);
      }
    }
  }
}

function filterSize() {
  if (filterData.Size && filterData.Size.length !== 0) {
    var j;
    for (j = 0; j < data.length; j++) {
      var beastSize = data[j].contents.size;
      var sizeOfBeast = beastSize.split(" ");

      if (!filterData.Size.includes(`${sizeOfBeast[0]}`)) {
        toBeDeleted.push(j);
      }
    }
  }
}

function filterSpeed() {
  if (filterData.Speed && filterData.Speed.length !== 0) {
    var j;
    for (j = 0; j < data.length; j++) {
      var beastSpeed = data[j].contents.Speed;
      var beastSpeedArray = beastSpeed.split(", ");

      var thisBeastsSpeed = [];
      var i;
      for (i = 0; i < beastSpeedArray.length; i++) {
        if (beastSpeedArray[i].includes("swim")) {
          thisBeastsSpeed.push("swim");
        } else if (beastSpeedArray[i].includes("fly")) {
          thisBeastsSpeed.push("fly");
        } else if (beastSpeedArray[i].includes("climb")) {
          thisBeastsSpeed.push("climb");
        } else if (beastSpeedArray[i].includes("burrow")) {
          thisBeastsSpeed.push("burrow");
        }
      }
    
      if (beastSpeedArray.length > thisBeastsSpeed.length) {
        thisBeastsSpeed.push("walk");
      } 

      var del = true;
      for (i = 0; i < thisBeastsSpeed.length; i++){
        if (filterData.Speed.includes(`${thisBeastsSpeed[i]}`)) {
          del = false;
        }
      }

      if (!filterData.Speed.includes("swim")) {
        if (thisBeastsSpeed.includes("swim")) {
          del = true;
        } 
      } 
      if (!filterData.Speed.includes("fly")) {
        if (thisBeastsSpeed.includes("fly")) {
          del = true;
        } 
      } 

      

      if (del) {
        toBeDeleted.push(j);
      }
    }
  }
}


function compressDeleted() {
  const compressed = [...new Set(toBeDeleted)];
  toBeDeleted = compressed;
}

function deleteFiltered() {
  var i;
  for(i = 0; i < data.length; i++) {
    if (toBeDeleted.includes(i)){
    } else {
      dataDoneFiltering.push(data[i]);
    }
  }
}