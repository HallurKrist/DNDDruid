import { makeCards } from './card';
import { makeButtons } from './buttons';
import { el } from './helpers';
import { makeDetails } from './details';

export function loadPage() {
  
	const theBody = document.body;
	const isDetailsPage = theBody.classList.contains('details');

	const page = el('div', 'page');
	if (!isDetailsPage) {
		makeButtons(page);
		makeCards(page);
	} else {
		makeDetails(page)
	}
	theBody.appendChild(page);
}