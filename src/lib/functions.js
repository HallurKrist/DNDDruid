import {makeCards} from './card';

export function loadPage() {
	const page = document.body;
	makeCards(page);
}