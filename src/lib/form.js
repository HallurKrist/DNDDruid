import { el } from "./helpers";






export function makeForm(page) {
  const theForm = el('div', 'form');
  theForm.classList.add('row');

  const circleForm = el('div', 'form_circle');
  const levelForm = el('div', 'form_level');
  
  const circleText = el('text', 'form_circle_text');
  const levelText = el('text', 'form_level_text');

  const circleDropdown = el('select', 'form_circle_select');
  const levelDropdown = el('select', 'form_level_select');

  circleDropdown.setAttribute('id', 'circleDropdown');
  levelDropdown.setAttribute('id', 'levelDropdown');

  circleText.appendChild(document.createTextNode('Druid Circle'));
  levelText.appendChild(document.createTextNode('Druid Level'));

  circleChoices(circleDropdown);
  levelChoices(levelDropdown);

  circleDropdown.addEventListener('change', addCircleEvent);
  levelDropdown.addEventListener('change', addLevelEvent);
 

  circleForm.appendChild(circleText);
  circleForm.appendChild(circleDropdown);

  levelForm.appendChild(levelText);
  levelForm.appendChild(levelDropdown);

  theForm.appendChild(circleForm);
  theForm.appendChild(levelForm);

  page.appendChild(theForm);

  fetch('https://raw.githubusercontent.com/HallurKrist/DNDDruid/master/druidCircle.json')
    .then((result) => {
      if (!result.ok) {
        throw new Error('Non 200 status');
      }
      return result.json();
    })
    .then((data) => {
      window.localStorage.setItem('DNDDruidCircleLevel', JSON.stringify(data));
    })
    .catch((error) => console.error(error));
}

function circleChoices(circleSelect) {
  const none = el('option');
  const moon = el('option');
  const other = el('option');

  none.setAttribute('value', 'none');
  moon.setAttribute('value', 'moon');
  other.setAttribute('value', 'other');

  none.appendChild(document.createTextNode('No circle chosen'));
  moon.appendChild(document.createTextNode('Circle of the Moon'));
  other.appendChild(document.createTextNode('Not circle of the Moon'));

  circleSelect.appendChild(none);
  circleSelect.appendChild(moon);
  circleSelect.appendChild(other);
}


function levelChoices(levelSelect) {
  var i;
  for (i = 0; i < 21; i++) {
    var thisLevel = el('option');

    if (i === 0) {
      thisLevel.setAttribute('value', `${i}`);
    
      thisLevel.appendChild(document.createTextNode(`no level chosen`));

      levelSelect.appendChild(thisLevel);
    } else {
      thisLevel.setAttribute('value', `${i}`);
    
      thisLevel.appendChild(document.createTextNode(`level ${i}`));
  
      levelSelect.appendChild(thisLevel);
    }
  }
}


function addCircleEvent(event) {
  const circle = event.srcElement.value;
  const circleLevelData =  JSON.parse(window.localStorage.getItem('DNDDruidCircleLevel'));
  var theFilter = JSON.parse(window.localStorage.getItem('filter'));
  if (circle === "none") {
    if (!theFilter) {
      window.localStorage.setItem('filter', `{"Circle": "${circle}"}`);
    } else {
      theFilter.Circle = `${circle}`;
      window.localStorage.setItem('filter', JSON.stringify(theFilter));
    }
  } else if (circle === "moon") {
    if (!theFilter) {
      window.localStorage.setItem('filter', `{"Circle": "${circle}"}`);
    } else {
      theFilter.Circle = `${circle}`;
      window.localStorage.setItem('filter', JSON.stringify(theFilter));
    }

  } else if (circle === "other") {
    if (!theFilter) {
      window.localStorage.setItem('filter', `{"Circle": "${circle}"}`);
    } else {
      theFilter.Circle = `${circle}`;
      window.localStorage.setItem('filter', JSON.stringify(theFilter));
    }
  } else {
    console.error('couldn\'t what circle was chosen try reloading');
  }
  // debugger;
    
}

function addLevelEvent(event) {
  const level = event.srcElement.value;
  var theFilter = JSON.parse(window.localStorage.getItem('filter'));

  // debugger;
  var i;
  for(i = 0; i < 21; i++) {
    if (parseInt(level) === i) {
      if (!theFilter) {
        window.localStorage.setItem('filter', `{"Level": "${i}"}`);
      } else {
        theFilter.Level = `${i}`;
        window.localStorage.setItem('filter', JSON.stringify(theFilter));
      }
    }
  }
}


	// if (!data) {
	// 	var newData = `{"Size": ["${whatButton}"]}`;
	// 	window.localStorage.setItem('filter', newData);
	// } else {
	// 	if (!data.Size) {
	// 		data.Size = [whatButton];
	// 	} else {
	// 		var index = data.Size.findIndex((el) => el === whatButton);
	// 		if (index === -1){
	// 			data.Size.push(whatButton);
	// 		} else {
	// 			data.Size.splice(index, 1);
	// 		}
	// 	}
	// 	window.localStorage.removeItem('filter');
	// 	window.localStorage.setItem('filter', JSON.stringify(data));