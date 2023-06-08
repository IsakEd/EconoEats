import type Food from '../app';

const exampleFoods: Food[] = [
	{
		name: 'havregryn',
		data: {
			price: 20,
			kcal: 389,
			carbs: 66,
			fat: 7,
			protein: 13
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: false
		},
		bounds: [0, 40] // x = 40 grams (common portion size for oatmeal)
	},
	{
		name: 'pea/rice 7:3 proteinpulver',
		data: {
			price: 259.8,
			kcal: 380.21,
			carbs: 3.24,
			fat: 5.25,
			protein: 80
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 30] // x = 30 grams (common portion size for protein powder)
	},
	{
		name: 'kycklingbröst',
		data: {
			price: 110,
			kcal: 112,
			carbs: 0,
			fat: 4,
			protein: 19
		},
		suitable: {
			vegan: false,
			vegetarian: false,
			lactose: true,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for chicken breast)
	},
	{
		name: 'kycklingfärs',
		data: {
			price: 100,
			kcal: 139,
			carbs: 0,
			fat: 7,
			protein: 19
		},
		suitable: {
			vegan: false,
			vegetarian: false,
			lactose: true,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for ground chicken)
	},
	{
		name: 'ägg',
		data: {
			price: 50,
			kcal: 73,
			carbs: 0,
			fat: 5,
			protein: 7
		},
		suitable: {
			vegan: false,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 50] // x = 50 grams (common portion size for eggs)
	},
	{
		name: 'tonfisk',
		data: {
			price: 150,
			kcal: 137.7,
			carbs: 0,
			fat: 3.3,
			protein: 27
		},
		suitable: {
			vegan: false,
			vegetarian: false,
			lactose: true,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for tuna)
	},
	{
		name: 'halloumi',
		data: {
			price: 150,
			kcal: 330,
			carbs: 2,
			fat: 26,
			protein: 22
		},
		suitable: {
			vegan: false,
			vegetarian: true,
			lactose: false,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for halloumi cheese)
	},
	{
		name: 'mellanmjölk',
		data: {
			price: 15,
			kcal: 47.5,
			carbs: 5,
			fat: 1.5,
			protein: 3.5
		},
		suitable: {
			vegan: false,
			vegetarian: true,
			lactose: false,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for semi-skimmed milk)
	},
	{
		name: 'A-fil',
		data: {
			price: 20,
			kcal: 56.2,
			carbs: 3.9,
			fat: 3,
			protein: 3.4
		},
		suitable: {
			vegan: false,
			vegetarian: true,
			lactose: false,
			gluten: true
		},
		bounds: [0, 200] // x = 200 grams (common portion size for cultured milk)
	},
	{
		name: 'bulgur',
		data: {
			price: 30,
			kcal: 341.75,
			carbs: 69,
			fat: 1.75,
			protein: 12.5
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: false
		},
		bounds: [0, 100] // x = 100 grams (common portion size for bulgur)
	},
	{
		name: 'ris',
		data: {
			price: 20,
			kcal: 181.5,
			carbs: 38,
			fat: 1.5,
			protein: 4
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for rice)
	},
	{
		name: 'kikärtor',
		data: {
			price: 45,
			kcal: 93.6,
			carbs: 11,
			fat: 2.8,
			protein: 6.1
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 100] // x = 100 grams (common portion size for chickpeas)
	},
	{
		name: 'jordnötssmör',
		data: {
			price: 100,
			kcal: 594,
			carbs: 22,
			fat: 50,
			protein: 25
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 30] // x = 30 grams (common portion size for peanut butter)
	},
	{
		name: 'fiberrost',
		data: {
			price: 37,
			kcal: 252.7,
			carbs: 46,
			fat: 3.5,
			protein: 9.3
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: false
		},
		bounds: [0, 50] // x = 50 grams (common portion size for whole grain toast)
	},
	{
		name: 'musli',
		data: {
			price: 50,
			kcal: 332.3,
			carbs: 66,
			fat: 2.7,
			protein: 11
		},
		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 50] // x = 50 grams (common portion size for muesli)
	},
	{
		name: 'broccoli',
		data: {
			price: 50,
			kcal: 16.4,
			carbs: 1.8,
			fat: 0,
			protein: 2.3
		},

		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 80]
	},
	{
		name: 'linser',
		data: {
			price: 40,
			kcal: 345,
			carbs: 60,
			fat: 1,
			protein: 24
		},

		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 80]
	},
	{
		name: 'ärtor',
		data: {
			price: 40,
			kcal: 76,
			carbs: 14,
			fat: 0,
			protein: 5
		},

		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 80]
	},
	{
		name: 'spenat',
		data: {
			price: 23,
			kcal: 22.2,
			carbs: 2.8,
			fat: 0.2,
			protein: 2.3
		},

		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 80]
	},
	{
		name: 'olivolja',
		data: {
			price: 80,
			kcal: 801,
			carbs: 0,
			fat: 89,
			protein: 0
		},

		suitable: {
			vegan: true,
			vegetarian: true,
			lactose: true,
			gluten: true
		},
		bounds: [0, 80]
	},
	{
		name: 'smör',
		data: {
			price: 100,
			kcal: 742,
			carbs: 0,
			fat: 82,
			protein: 1
		},
		suitable: {
			vegan: false,
			vegetarian: true,
			lactose: false,
			gluten: true
		},
		bounds: [0, 80]
	}
];

export default exampleFoods;
