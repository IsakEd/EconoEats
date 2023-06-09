import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const language: Writable<Language> = writable('swedish');

const currencies: Record<string, Currency> = {
	SEK: {
		id: 'SEK',
		endonym: 'svensk krona',
		symbol: ':-',
		shorthand: 'kr'
	},
	EUR: {
		id: 'EUR',
		endonym: 'euro',
		symbol: '€',
		shorthand: 'eur'
	},
	USD: {
		id: 'USD',
		endonym: 'dollar',
		symbol: '$',
		shorthand: 'usd'
	}
};

export const currency: Writable<Currency> = writable(currencies.SEK);
