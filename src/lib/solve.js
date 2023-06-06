import GLPK from 'glpk.js';
import Problem from './Problem.js';

function solveLP(foods, categoryLimits, foodItemLimits) {
	const glpk = GLPK();
	return glpk.solve(new Problem(foods, categoryLimits, foodItemLimits));
}

//export default solveLP;

const test_foods = [
	{
		name: 'vWhey 70/30 ä/r',
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
			gluten: false
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
	}
];

const test_limits = [
	{
		name: 'fat',
		bounds: [100, 110]
	},
	{
		name: 'carbs',
		bounds: [320, 330]
	},
	{
		name: 'protein',
		bounds: [150, 160]
	}
];

const test_food_item_limits = [
	{
		name: 'vWhey 70/30 ä/r',
		bounds: [0, 0.8]
	},
	{
		name: 'kycklingbröst',
		bounds: [0, 9999]
	},
	{
		name: 'kycklingfärs',
		bounds: [0, 9999]
	},
	{
		name: 'ägg',
		bounds: [1.8, 9999]
	},
	{
		name: 'tonfisk',
		bounds: [0, 9999]
	},
	{
		name: 'halloumi',
		bounds: [0, 9999]
	},
	{
		name: 'mellanmjölk',
		bounds: [0, 9999]
	},
	{
		name: 'A-fil',
		bounds: [0, 9999]
	},
	{
		name: 'bulgur',
		bounds: [0, 1.5]
	},
	{
		name: 'ris',
		bounds: [0, 9999]
	},
	{
		name: 'kikärtor',
		bounds: [0, 9999]
	},
	{
		name: 'jordnötssmör',
		bounds: [0, 1]
	},
	{
		name: 'fiberrost',
		bounds: [0, 2.4]
	},
	{
		name: 'musli',
		bounds: [0, 9999]
	},
	{
		name: 'broccoli',
		bounds: [0, 9999]
	},
	{
		name: 'linser',
		bounds: [0, 0.8]
	},
	{
		name: 'ärtor',
		bounds: [0, 9999]
	},
	{
		name: 'spenat',
		bounds: [0, 9999]
	},
	{
		name: 'olivolja',
		bounds: [0, 9999]
	},
	{
		name: 'smör',
		bounds: [0, 9999]
	}
];

solveLP(test_foods, test_limits, test_food_item_limits);
