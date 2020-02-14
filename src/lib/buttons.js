import {el} from './helpers';
import {filterCards} from './filter'

export function makeButtons(page) {
	const allButtons = el('div', 'buttons');
	allButtons.classList.add('row');

	const groupCR = el('div', 'button_group');
	groupCR.classList.add('CR_group');
	const groupSize = el('div', 'button_group');
	groupSize.classList.add('size_group');
	const groupSpeed = el('div', 'button_group');
	groupSpeed.classList.add('speed_group');

	makeCRGroup(groupCR);
	makeSizeGroup(groupSize);
	makeSpeedGroup(groupSpeed);

	var i;
	
	const crChildren = groupCR.children;
	const sizeChildren = groupSize.children;
	const speedChildren = groupSpeed.children;


	for (var child of crChildren) {
		child.addEventListener('click', theCrEvent);
	}
	for (var child of sizeChildren) {
		child.addEventListener('click', theSizeEvent);
	}
	for (var child of speedChildren) {
		child.addEventListener('click', theSpeedEvent);
	}

	allButtons.appendChild(groupCR);
	allButtons.appendChild(groupSize);
	allButtons.appendChild(groupSpeed);

	page.appendChild(allButtons);
}

function theCrEvent(event) {
	const whatButton = event.srcElement.value;
	const active = event.srcElement.classList.toggle('active');
	const data = JSON.parse(window.localStorage.getItem('filter'));
	if (!data) {
		var newData = `{"CR": ["${whatButton}"]}`;
		window.localStorage.setItem('filter', newData);
	} else {
		if (!data.CR) {
			data.CR = [whatButton];
		} else {
			var index = data.CR.findIndex((el) => el === whatButton);
			if (index === -1){
				data.CR.push(whatButton);
			} else {
				data.CR.splice(index, 1);
			}
		}
		window.localStorage.removeItem('filter');
		window.localStorage.setItem('filter', JSON.stringify(data));
	}
	filterCards();
}

function theSizeEvent(event) {
	const whatButton = event.srcElement.value;
	event.srcElement.classList.toggle('active');
	const data = JSON.parse(window.localStorage.getItem('filter'));
	if (!data) {
		var newData = `{"Size": ["${whatButton}"]}`;
		window.localStorage.setItem('filter', newData);
	} else {
		if (!data.Size) {
			data.Size = [whatButton];
		} else {
			var index = data.Size.findIndex((el) => el === whatButton);
			if (index === -1){
				data.Size.push(whatButton);
			} else {
				data.Size.splice(index, 1);
			}
		}
		window.localStorage.removeItem('filter');
		window.localStorage.setItem('filter', JSON.stringify(data));
	}
	filterCards();
}

function theSpeedEvent(event) {
	const whatButton = event.srcElement.value;
	const active = event.srcElement.classList.toggle('active');
	const data = JSON.parse(window.localStorage.getItem('filter'));
	if (!data) {
		var newData = `{"Speed": ["${whatButton}"]}`;
		window.localStorage.setItem('filter', newData);
	} else {
		if (!data.Speed) {
			data.Speed = [whatButton];
		} else {
			var index = data.Speed.findIndex((el) => el === whatButton);
			if (index === -1){
				data.Speed.push(whatButton);
			} else {
				data.Speed.splice(index, 1);
			}
		}
		window.localStorage.removeItem('filter');
		window.localStorage.setItem('filter', JSON.stringify(data));
	}
	filterCards();
}

function makeCRGroup(parent) {
	const title = el('text', 'button_title');

	const btn1 = el('button', 'button_button');
	const btn2 = el('button', 'button_button');
	const btn3 = el('button', 'button_button');
	const btn4 = el('button', 'button_button');
	const btn5 = el('button', 'button_button');
	const btn6 = el('button', 'button_button');
	const btn7 = el('button', 'button_button');
	const btn8 = el('button', 'button_button');
	const btn9 = el('button', 'button_button');
	const btn10 = el('button', 'button_button');


	title.appendChild(document.createTextNode('Combat Rating'));

	btn1.appendChild(document.createTextNode('0-CR'));
	btn2.appendChild(document.createTextNode('1/8-CR'));
	btn3.appendChild(document.createTextNode('1/4-CR'));
	btn4.appendChild(document.createTextNode('1/2-CR'));
	btn5.appendChild(document.createTextNode('1-CR'));
	btn6.appendChild(document.createTextNode('2-CR'));
	btn7.appendChild(document.createTextNode('3-CR'));
	btn8.appendChild(document.createTextNode('4-CR'));
	btn9.appendChild(document.createTextNode('5-CR'));
	btn10.appendChild(document.createTextNode('6-CR'));

	btn1.setAttribute('value', '0-CR');
	btn2.setAttribute('value', '1/8-CR');
	btn3.setAttribute('value', '1/4-CR');
	btn4.setAttribute('value', '1/2-CR');
	btn5.setAttribute('value', '1-CR');
	btn6.setAttribute('value', '2-CR');
	btn7.setAttribute('value', '3-CR');
	btn8.setAttribute('value', '4-CR');
	btn9.setAttribute('value', '5-CR');
	btn10.setAttribute('value', '6-CR');

	parent.appendChild(title);

	parent.appendChild(btn1);
	parent.appendChild(btn2);
	parent.appendChild(btn3);
	parent.appendChild(btn4);
	parent.appendChild(btn5);
	parent.appendChild(btn6);
	parent.appendChild(btn7);
	parent.appendChild(btn8);
	parent.appendChild(btn9);
	parent.appendChild(btn10);
}

function makeSizeGroup(parent) {
	const title = el('text', 'button_title');

	const btn1 = el('button', 'button_button');
	const btn2 = el('button', 'button_button');
	const btn3 = el('button', 'button_button');
	const btn4 = el('button', 'button_button');
	const btn5 = el('button', 'button_button');


	title.appendChild(document.createTextNode('Size'));

	btn1.appendChild(document.createTextNode('Tiny'));
	btn2.appendChild(document.createTextNode('Small'));
	btn3.appendChild(document.createTextNode('Medium'));
	btn4.appendChild(document.createTextNode('Large'));
	btn5.appendChild(document.createTextNode('Huge'));

	btn1.setAttribute('value', 'Tiny');
	btn2.setAttribute('value', 'Small');
	btn3.setAttribute('value', 'Medium');
	btn4.setAttribute('value', 'Large');
	btn5.setAttribute('value', 'Huge');


	parent.appendChild(title);

	parent.appendChild(btn1);
	parent.appendChild(btn2);
	parent.appendChild(btn3);
	parent.appendChild(btn4);
	parent.appendChild(btn5);
}

function makeSpeedGroup(parent) {
	const title = el('text', 'button_title');

	const btn1 = el('button', 'button_button');
	const btn2 = el('button', 'button_button');
	const btn3 = el('button', 'button_button');
	const btn4 = el('button', 'button_button');
	const btn5 = el('button', 'button_button');


	title.appendChild(document.createTextNode('Speed'));

	btn1.appendChild(document.createTextNode('Walk/Running'));
	btn2.appendChild(document.createTextNode('Swim'));
	btn3.appendChild(document.createTextNode('Fly'));
	btn4.appendChild(document.createTextNode('Climb'));
	btn5.appendChild(document.createTextNode('Burrow'));


	btn1.setAttribute('value', 'walk');
	btn2.setAttribute('value', 'swim');
	btn3.setAttribute('value', 'fly');
	btn4.setAttribute('value', 'climb');
	btn5.setAttribute('value', 'burrow');


	parent.appendChild(title);

	parent.appendChild(btn1);
	parent.appendChild(btn2);
	parent.appendChild(btn3);
	parent.appendChild(btn4);
	parent.appendChild(btn5);
}


		// <div class="row buttons">
    //   <div class="button_group CR_group">
		//     <button class="">0-CR</button>
		// 		 <button class="">1/8-CR</button>
  	// 		 <button class="">1/4-CR</button>
  	// 		 <button class="">1/2-CR</button>
    //     <button class="">1-CR</button>
    //     <button class="">2-CR</button>
    //     <button class="">3-CR</button>
    //     <button class="">4-CR</button>
    //     <button class="">5-CR</button>
    //     <button class="">6-CR</button>
    //   </div>
    //   <div class="button_group size_group">
    //     <button class="">Tiny</button>
    //     <button class="">Small</button>
    //     <button class="">Medium</button>
    //     <button class="">Large</button>
    //     <button class="">Huge</button>
    //   </div>
    //   <div class="button_group speed_group">
    //     <button class="">Walk/Running</button>
    //     <button class="">Swim</button>
    //     <button class="">Fly</button>
    //   </div>
    // </div>