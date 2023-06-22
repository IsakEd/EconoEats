import { derived, readable, type Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import lang from '$lib/lang';

export const language: Writable<Language> = writable('english');

export const L = derived(language, (language) => lang[language]);

export const currencies: Record<string, Currency> = {
	SEK: {
		id: 'SEK',
		endonym: 'svensk krona',
		plural: 'kronor',
		symbol: 'kr',
		shorthand: 'kr',
		fractional: 'öre'
	},
	EUR: {
		id: 'EUR',
		endonym: 'euro',
		plural: 'euros',
		symbol: '€',
		shorthand: 'eur',
		fractional: '¢'
	},
	USD: {
		id: 'USD',
		endonym: 'dollar',
		plural: 'dollars',
		symbol: '$',
		shorthand: 'usd',
		fractional: '¢'
	}
};

export const currency: Writable<Currency> = writable(currencies.EUR);
