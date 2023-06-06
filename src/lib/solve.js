import GLPK from 'glpk.js';
const glpk = GLPK();

const samplefoods = [
	{
		name: 'ärtprotein',
		data: {
			price: 249,
			kcal: 386,
			carbs: 3,
			fat: 6,
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
		name: 'risprotein',
		data: {
			price: 285,
			kcal: 366.7,
			carbs: 3.8,
			fat: 3.5,
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

let limits = [
	{ name: 'fat', bounds: [60, 120] },
	{ name: 'carbs', bounds: [40, 300] },
	{ name: 'protein', bounds: [40, 200] }
];

let foodItemLimits = [
	{ name: 'olivolja', bounds: [0, 0.5] },
	{ name: 'linser', bounds: [0, 0.6] },
	{ name: 'smör', bounds: [0.2, 0.5] }
];

class Problem {
	constructor(foods, categoryBounds, foodItemBounds) {
		this.name = 'LP';
		this.objective = {
			direction: glpk.GLP_MIN,
			name: 'price',
			vars: foods.map((food) => {
				return { name: food.name, coef: food.data.price };
			})
		};

		this.subjectTo = categoryBounds.map((limit) => {
			return {
				name: limit.name,
				vars: foods.map((food) => {
					return { name: food.name, coef: food.data[limit.name] };
				}),
				bnds: { type: glpk.GLP_DB, ub: limit.bounds[1], lb: limit.bounds[0] }
			};
		});

		this.options = {
			msglev: glpk.GLP_MSG_ALL,
			presol: true,
			cb: {
				call: (progress) => console.log(progress),
				each: 1
			}
		};
	}
}

/* const options = {
	msglev: glpk.GLP_MSG_ALL,
	presol: true,
	cb: {
		call: (progress) => console.log(progress),
		each: 1
	}
}; */

glpk.solve(new Problem(samplefoods, limits));

/* const res = glpk.solve(
	{
		name: 'LP',
		objective: {
			direction: glpk.GLP_MIN,
			name: 'price',
			vars: [
				{ name: 'mjölk', coef: 15 },
				{ name: 'bröd', coef: 80 },
				{ name: 'olja', coef: 80 }
			]
		},
		subjectTo: [
			{
				name: 'protein',
				vars: [
					{ name: 'mjölk', coef: 4.5 },
					{ name: 'bröd', coef: 12 },
					{ name: 'olja', coef: 0 }
				],
				bnds: { type: glpk.GLP_DB, ub: 180, lb: 120 }
			},
			{
				name: 'fat',
				vars: [
					{ name: 'mjölk', coef: 1.5 },
					{ name: 'bröd', coef: 4 },
					{ name: 'olja', coef: 88 }
				],
				bnds: { type: glpk.GLP_DB, ub: 120, lb: 80 }
			},
			{
				name: 'mjölk-lim',
				vars: [{ name: 'mjölk', coef: 1 }],
				bnds: { type: glpk.GLP_UP, ub: 15 }
			}
		]
	},
	options
);
 */
