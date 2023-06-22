type LanguageFoodMap = {
	[key in Language]: Food[];
};

const exampleFoods: LanguageFoodMap = {
	swedish: [
		{
			name: 'pasta',
			data: {
				price: 15,
				kcal: 356,
				carbs: 71,
				fat: 2,
				protein: 12.5
			},
			suitable: {
				vegan: true,
				vegetarian: true,
				lactose: true,
				gluten: false
			},
			bounds: [0, 240],
			type: {
				dairy: false,
				vegetable: false,
				fruit: false,
				junk: false,
				grain: true
			}
		},
		{
			name: 'havregryn',
			data: { price: 20, kcal: 389, carbs: 66, fat: 7, protein: 13 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: false },
			bounds: [0, 120],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: true }
		},
		{
			name: 'veganskt proteinpulver',
			data: { price: 259.8, kcal: 380.21, carbs: 3.24, fat: 5.25, protein: 80 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 90],
			type: { dairy: false, vegetable: false, fruit: false, junk: true, grain: true }
		},
		{
			name: 'kycklingbröst',
			data: { price: 110, kcal: 112, carbs: 0, fat: 4, protein: 19 },
			suitable: { vegan: false, vegetarian: false, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'kycklingfärs',
			data: { price: 100, kcal: 139, carbs: 0, fat: 7, protein: 19 },
			suitable: { vegan: false, vegetarian: false, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'ägg',
			data: { price: 50, kcal: 73, carbs: 0, fat: 5, protein: 7 },
			suitable: { vegan: false, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 150],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'tonfisk',
			data: { price: 150, kcal: 137.7, carbs: 0, fat: 3.3, protein: 27 },
			suitable: { vegan: false, vegetarian: false, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'halloumi',
			data: { price: 150, kcal: 330, carbs: 2, fat: 26, protein: 22 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 300],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'mellanmjölk',
			data: { price: 15, kcal: 47.5, carbs: 5, fat: 1.5, protein: 3.5 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 300],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'A-fil',
			data: { price: 20, kcal: 56.2, carbs: 3.9, fat: 3, protein: 3.4 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 600],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'bulgur',
			data: { price: 30, kcal: 341.75, carbs: 69, fat: 1.75, protein: 12.5 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: false },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: true }
		},
		{
			name: 'ris',
			data: { price: 20, kcal: 181.5, carbs: 38, fat: 1.5, protein: 4 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: true }
		},
		{
			name: 'kikärtor',
			data: { price: 45, kcal: 93.6, carbs: 11, fat: 2.8, protein: 6.1 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'jordnötssmör',
			data: { price: 100, kcal: 594, carbs: 22, fat: 50, protein: 25 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 90],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'fiberrost',
			data: { price: 37, kcal: 252.7, carbs: 46, fat: 3.5, protein: 9.3 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: false },
			bounds: [0, 150],
			type: { dairy: false, vegetable: false, fruit: false, junk: true, grain: false }
		},
		{
			name: 'musli',
			data: { price: 50, kcal: 332.3, carbs: 66, fat: 2.7, protein: 11 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 150],
			type: { dairy: false, vegetable: false, fruit: false, junk: true, grain: true }
		},
		{
			name: 'broccoli',
			data: { price: 50, kcal: 16.4, carbs: 1.8, fat: 0, protein: 2.3 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'linser',
			data: { price: 40, kcal: 345, carbs: 60, fat: 1, protein: 24 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'ärtor',
			data: { price: 40, kcal: 76, carbs: 14, fat: 0, protein: 5 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'spenat',
			data: { price: 23, kcal: 22.2, carbs: 2.8, fat: 0.2, protein: 2.3 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'olivolja',
			data: { price: 80, kcal: 801, carbs: 0, fat: 89, protein: 0 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'smör',
			data: { price: 100, kcal: 742, carbs: 0, fat: 82, protein: 1 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 240],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		}
	],

	english: [
		{
			name: 'pasta',
			data: {
				price: 1.3,
				kcal: 356,
				carbs: 71,
				fat: 2,
				protein: 12.5
			},
			suitable: {
				vegan: true,
				vegetarian: true,
				lactose: true,
				gluten: false
			},
			bounds: [0, 240],
			type: {
				dairy: false,
				vegetable: false,
				fruit: false,
				junk: false,
				grain: true
			}
		},
		{
			name: 'oats',
			data: { price: 1.5, kcal: 389, carbs: 66, fat: 7, protein: 13 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: false },
			bounds: [0, 120],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: true }
		},
		{
			name: 'vegan protein powder',
			data: { price: 25, kcal: 380.21, carbs: 3.24, fat: 5.25, protein: 80 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 90],
			type: { dairy: false, vegetable: false, fruit: false, junk: true, grain: true }
		},
		{
			name: 'chicken breast',
			data: { price: 6, kcal: 112, carbs: 0, fat: 4, protein: 19 },
			suitable: { vegan: false, vegetarian: false, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'chicken mince',
			data: { price: 5.5, kcal: 139, carbs: 0, fat: 7, protein: 19 },
			suitable: { vegan: false, vegetarian: false, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'eggs',
			data: { price: 5, kcal: 73, carbs: 0, fat: 5, protein: 7 },
			suitable: { vegan: false, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 150],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'canned tuna',
			data: { price: 13, kcal: 137.7, carbs: 0, fat: 3.3, protein: 27 },
			suitable: { vegan: false, vegetarian: false, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'halloumi',
			data: { price: 20, kcal: 330, carbs: 2, fat: 26, protein: 22 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 300],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'semi skimmed milk',
			data: { price: 1.2, kcal: 47.5, carbs: 5, fat: 1.5, protein: 3.5 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 300],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'soured milk, probiotic',
			data: { price: 2, kcal: 56.2, carbs: 3.9, fat: 3, protein: 3.4 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 600],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'bulgur',
			data: { price: 2.5, kcal: 341.75, carbs: 69, fat: 1.75, protein: 12.5 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: false },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: true }
		},
		{
			name: 'rice',
			data: { price: 2, kcal: 181.5, carbs: 38, fat: 1.5, protein: 4 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: true }
		},
		{
			name: 'chickpeas',
			data: { price: 1.6, kcal: 93.6, carbs: 11, fat: 2.8, protein: 6.1 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 300],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'peanut butter',
			data: { price: 6.5, kcal: 594, carbs: 22, fat: 50, protein: 25 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 90],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'whole grain bread',
			data: { price: 3.2, kcal: 252.7, carbs: 46, fat: 3.5, protein: 9.3 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: false },
			bounds: [0, 150],
			type: { dairy: false, vegetable: false, fruit: false, junk: true, grain: false }
		},
		{
			name: 'muesli',
			data: { price: 4.4, kcal: 332.3, carbs: 66, fat: 2.7, protein: 11 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 150],
			type: { dairy: false, vegetable: false, fruit: false, junk: true, grain: true }
		},
		{
			name: 'broccoli',
			data: { price: 3, kcal: 16.4, carbs: 1.8, fat: 0, protein: 2.3 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'lentils',
			data: { price: 3.5, kcal: 345, carbs: 60, fat: 1, protein: 24 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'sweet peas',
			data: { price: 3.1, kcal: 76, carbs: 14, fat: 0, protein: 5 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'spinach, frozen',
			data: { price: 3, kcal: 22.2, carbs: 2.8, fat: 0.2, protein: 2.3 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: true, fruit: false, junk: false, grain: false }
		},
		{
			name: 'olive oil',
			data: { price: 7, kcal: 801, carbs: 0, fat: 89, protein: 0 },
			suitable: { vegan: true, vegetarian: true, lactose: true, gluten: true },
			bounds: [0, 240],
			type: { dairy: false, vegetable: false, fruit: false, junk: false, grain: false }
		},
		{
			name: 'butter',
			data: { price: 8, kcal: 742, carbs: 0, fat: 82, protein: 1 },
			suitable: { vegan: false, vegetarian: true, lactose: false, gluten: true },
			bounds: [0, 240],
			type: { dairy: true, vegetable: false, fruit: false, junk: false, grain: false }
		}
	]
};

export default exampleFoods;
