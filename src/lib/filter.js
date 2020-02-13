

var toBeDeleted = [];
const data = JSON.parse(window.localStorage.getItem('DNDDruidBeasts'));
var filterData;

export function filterCards() {
  filterData = JSON.parse(window.localStorage.getItem('filter'));

  console.log('to be filtered CR: ' + filterData.CR);
  console.log('to be filtered Size: ' + filterData.Size);
  console.log('to be filtered Speed: ' + filterData.Speed);

  

  filterCR();
  filterSize();

  compressDeleted();

  
}

function filterCR() {
  var j;
  for (j = 0; j < data.length; j++) {
    var thedata = data[j];
    if (!filterData.CR.includes(`${thedata.CR}-CR`)) {
      toBeDeleted.push(j);
      debugger;
    }
  }
  console.log('after cr filter ');
  console.log(toBeDeleted);
}

function filterSize() {
  var j;
  for (j = 0; j < data.length; j++) {
    var beastSize = data[j].contents.size;
    var sizeOfBeast = beastSize.split(" ");

    if (!filterData.Size.includes(`${sizeOfBeast[0]}`)) {
      toBeDeleted.push(j);
    }
  }
  console.log('after size filter ');
  console.log(toBeDeleted);
}


function compressDeleted() {
  const compressed = [...new Set(toBeDeleted)];
  toBeDeleted = compressed;


  console.log('after compressing filter ');
  console.log(toBeDeleted);
}