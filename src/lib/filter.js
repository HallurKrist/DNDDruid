import { empty } from './helpers';
import { makeCards } from './card';

var toBeDeleted = [];
const data = JSON.parse(window.localStorage.getItem('DNDDruidBeasts'));
var filterData;
var dataDoneFiltering = [];

export function filterCards() {
  filterData = JSON.parse(window.localStorage.getItem('filter'));

  console.log('to be filtered CR: ' + filterData.CR);
  console.log('to be filtered Size: ' + filterData.Size);
  console.log('to be filtered Speed: ' + filterData.Speed);

  toBeDeleted = [];
  dataDoneFiltering = [];

  filterCR();
  filterSize();

  compressDeleted();
  deleteFiltered();

  const cards = document.querySelector('.cards');
  empty(cards);
  const thePage = cards.parentElement;
  thePage.removeChild(cards);

  if (dataDoneFiltering.length === 0) {
    makeCards(thePage, data);
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
        // debugger;
      }
    }
    console.log('after cr filter ');
    console.log(toBeDeleted);
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
        // debugger;
      }
    }
    console.log('after size filter ');
    console.log(toBeDeleted);
  }
}


function compressDeleted() {
  const compressed = [...new Set(toBeDeleted)];
  toBeDeleted = compressed;


  console.log('after compressing filter ');
  console.log(toBeDeleted);
}

function deleteFiltered() {
  var i;
  for(i = 0; i < data.length; i++) {
    if (toBeDeleted.includes(i)){
      // debugger;
    } else {
      dataDoneFiltering.push(data[i]);
    }
  }
  console.log('after deleting filtering');
  console.log(dataDoneFiltering);
}