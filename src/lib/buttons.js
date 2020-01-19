import {el} from './helpers';

export function makeButtons(page) {
	const allButtons = el('div', 'buttons');

	const groupCR = el('div', 'button_group');
	groupCR.classList.add('CR_group');
	const groupSize = el('div', 'button_group');
	groupSize.classList.add('size_group');
	const groupSpeed = el('div', 'button_group');
	groupSpeed.classList.add('speed_group');

	makeCRGroup(groupCR);
	makeSizeGroup(groupSize);
	makeSpeedGroup(groupSpeed);

	allButtons.appendChild(groupCR);
	allButtons.appendChild(groupSize);
	allButtons.appendChild(groupSpeed);

	page.appendChild(allButtons);
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


	title.appendChild(document.createTextNode('Type'));

	btn1.appendChild(document.createTextNode('Walk/Running'));
	btn2.appendChild(document.createTextNode('Swim'));
	btn3.appendChild(document.createTextNode('Fly'));


	parent.appendChild(title);

	parent.appendChild(btn1);
	parent.appendChild(btn2);
	parent.appendChild(btn3);
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