import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

type Language = 'swedish' | 'english';
const language: Writable<Language> = writable('swedish');

interface Currency {
	endonym: string;
	symbol: string;
	shorthand: string;
}

const currencies: Record<string, Currency> = {
	SEK: {
		endonym: 'svensk krona',
		symbol: ':-',
		shorthand: 'kr'
	},
	EUR: {
		endonym: 'euro',
		symbol: '€',
		shorthand: 'eur'
	},
	USD: {
		endonym: 'dollar',
		symbol: '$',
		shorthand: 'usd'
	}
};
