import { makeCards } from './card';
import { makeButtons } from './buttons';
import { el } from './helpers';
import { makeDetails } from './details';
import { makeForm } from './form';

export function loadPage() {
  
	const theBody = document.body;
	const isDetailsPage = theBody.classList.contains('details');
	window.localStorage.removeItem('filter');
	
	const page = el('div', 'page');
	if (!isDetailsPage) {
		makeForm(page);
		makeButtons(page);
		makeCards(page);
	} else {
		makeDetails(page)
	}
	
	theBody.appendChild(page);
}