import GLPK from 'glpk.js';
const glpk = GLPK();
const options = {
	msglev: glpk.GLP_MSG_ALL,
	presol: true,
	cb: {
		call: (progress) => console.log(progress),
		each: 1
	}
};
const res = glpk.solve(
	{
		name: 'LP',
		objective: {
			direction: glpk.GLP_MIN,
			name: 'pris',
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

console.log(res);
