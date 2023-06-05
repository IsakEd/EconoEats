import type Food from '../app';

interface Food {
	name: string;
	price: number;
	kcal: number;
	carbs: number;
	fat: number;
	protein: number;
}

const exampleFoods: Food[] = [
	{
		name: 'ärtprotein',
		price: 249,
		kcal: 386,
		carbs: 3,
		fat: 6,
		protein: 80
	},
	{
		name: 'risprotein',
		price: 285,
		kcal: 366.7,
		carbs: 3.8,
		fat: 3.5,
		protein: 80
	},
	{
		name: 'vWhey 70/30 ä/r',
		price: 259.8,
		kcal: 380.21,
		carbs: 3.24,
		fat: 5.25,
		protein: 80
	},
	{
		name: 'kycklingbröst',
		price: 110,
		kcal: 112,
		carbs: 0,
		fat: 4,
		protein: 19
	},
	{
		name: 'kycklingfärs',
		price: 100,
		kcal: 139,
		carbs: 0,
		fat: 7,
		protein: 19
	},
	{
		name: 'ägg',
		price: 50,
		kcal: 73,
		carbs: 0,
		fat: 5,
		protein: 7
	},
	{
		name: 'tonfisk',
		price: 150,
		kcal: 137.7,
		carbs: 0,
		fat: 3.3,
		protein: 27
	},
	{
		name: 'halloumi',
		price: 150,
		kcal: 330,
		carbs: 2,
		fat: 26,
		protein: 22
	},
	{
		name: 'mellanmjölk',
		price: 15,
		kcal: 47.5,
		carbs: 5,
		fat: 1.5,
		protein: 3.5
	},
	{
		name: 'A-fil',
		price: 20,
		kcal: 56.2,
		carbs: 3.9,
		fat: 3,
		protein: 3.4
	},
	{
		name: 'bulgur',
		price: 30,
		kcal: 341.75,
		carbs: 69,
		fat: 1.75,
		protein: 12.5
	},
	{
		name: 'ris',
		price: 20,
		kcal: 181.5,
		carbs: 38,
		fat: 1.5,
		protein: 4
	},
	{
		name: 'kikärtor',
		price: 45,
		kcal: 93.6,
		carbs: 11,
		fat: 2.8,
		protein: 6.1
	},
	{
		name: 'jordnötssmör',
		price: 100,
		kcal: 594,
		carbs: 22,
		fat: 50,
		protein: 25
	},
	{
		name: 'fiberrost',
		price: 37,
		kcal: 252.7,
		carbs: 46,
		fat: 3.5,
		protein: 9.3
	},
	{
		name: 'musli',
		price: 50,
		kcal: 332.3,
		carbs: 66,
		fat: 2.7,
		protein: 11
	},
	{
		name: 'broccoli',
		price: 50,
		kcal: 16.4,
		carbs: 1.8,
		fat: 0,
		protein: 2.3
	},
	{
		name: 'linser',
		price: 40,
		kcal: 345,
		carbs: 60,
		fat: 1,
		protein: 24
	},
	{
		name: 'ärtor',
		price: 40,
		kcal: 76,
		carbs: 14,
		fat: 0,
		protein: 5
	},
	{
		name: 'spenat',
		price: 23,
		kcal: 22.2,
		carbs: 2.8,
		fat: 0.2,
		protein: 2.3
	},
	{
		name: 'olivolja',
		price: 80,
		kcal: 801,
		carbs: 0,
		fat: 89,
		protein: 0
	},
	{
		name: 'smör',
		price: 100,
		kcal: 742,
		carbs: 0,
		fat: 82,
		protein: 1
	}
];

export default exampleFoods;
