import GLPK from 'glpk.js';
const glpk = GLPK();

class Problem {
	constructor(foods, categoryBounds) {
		this.name = 'LP';
		this.objective = {
			direction: glpk.GLP_MIN,
			name: 'price',
			vars: foods.map((food) => {
				return { name: food.name, coef: food.data.price * 0.1 }; // Pris per hekto
			})
		};

		this.subjectTo = categoryBounds
			.map((limit) => {
				// Food parameter bounds
				return {
					name: limit.name,
					vars: foods.map((food) => {
						return { name: food.name, coef: food.data[limit.name] };
					}),
					bnds: { type: glpk.GLP_DB, lb: limit.bounds[0], ub: limit.bounds[1] }
				};
			})
			.concat(
				// Single food bounds
				foods.map((food) => {
					/* 					console.log(limit.bounds[1]);
					//If the food item has bounds but isn't included in the diet it shouldn't be included in the limit
					if (foods.find((obj) => (obj.name = limit.name))) { */
					return {
						name: food.name,
						vars: [{ name: food.name, coef: 1 }],
						bnds: { type: glpk.GLP_DB, ub: food.bounds[1] / 100, lb: food.bounds[0] / 100 } // g -> hg
					};
				})
			);

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
export default Problem;
