import { makeCards } from './card';
import { makeButtons } from './buttons';
import { el } from './helpers';

export function loadPage() {
	const theBody = document.body;
	const page = el('div', 'page');
	makeButtons(page);
	makeCards(page);
	theBody.appendChild(page);
}