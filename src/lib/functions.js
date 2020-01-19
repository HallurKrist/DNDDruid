import {makeCards} from './card';
import { makeButtons } from './buttons';

export function loadPage() {
	const page = document.body;
	makeButtons(page);
	makeCards(page);
}