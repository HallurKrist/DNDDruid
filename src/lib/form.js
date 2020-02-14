import { el } from "./helpers";






export function makeForm(page) {
  const theForm = el('div', 'form');

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
  var circle = event.srcElement.value;
  // debugger;
    
}

function addLevelEvent(event) {
  
}