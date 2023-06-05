// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Food {
			name: string;
			price: number;
			kcal: number;
			carbohydrates: number;
			fat: number;
			protein: number;
		}

		type FoodCategory = 'junk' | 'grains' | 'meat' | 'drink';

		interface LP {
			name: string;
			objective: {
				direction: number;
				name: string;
				vars: { name: string; coef: number }[];
				//name					price/kg
			};
			subjectTo: {
				name: string;
				vars: { name: string; coef: number }[];
				bnds: { type: number; ub: number; lb: number };
			}[];

			/* 			example: 
			subjectTo: [{
				name: "calories",
				vars: [{name: 'pb', coef: 584}, {name: 'jelly', coef: 304}]
				bnds: [{type: GLPK.GLP_up, ub: 3400, lb:3000}]
			},
			{
				name: "protein",
				vars: [{name: 'pb', coef: 25}, {name: 'jelly', coef: 2}]
				bdns: [{type: GLPK.GLP_UP}]
			}
			*/

			bounds?: {
				name: string;
				type: number;
				ub: number;
				lb: number;
			}[];
			binaries?: string[];
			generals?: string[];
			options?: Options;
		}

		interface Options {
			mipgap?: number /* set relative mip gap tolerance to mipgap, default 0.0 */;
			tmlim?: number /* limit solution time to tmlim seconds, default INT_MAX */;
			msglev?: number /* message level for terminal output, default GLP_MSG_ERR */;
			presol?: boolean /* use presolver, default true */;
			cb?: {
				/* a callback called at each 'each' iteration (only simplex) */ call(result: Result);
				each: number;
			};
		}

		interface Result {
			name: string;
			time: number;
			result: {
				status: number;
				z: number;
				vars: { [key: string]: number };
				dual?: { [key: string]: number } /* simplex only */;
			};
		}

		interface GLPK {
			/* direction */
			readonly GLP_MIN: number /* minimization */;
			readonly GLP_MAX: number /* maximization */;

			/* type of auxiliary/structural variable: */
			readonly GLP_FR: number /* free (unbounded) variable */;
			readonly GLP_LO: number /* variable with lower bound */;
			readonly GLP_UP: number /* variable with upper bound */;
			readonly GLP_DB: number /* double-bounded variable */;
			readonly GLP_FX: number /* fixed variable */;

			/* message level: */
			readonly GLP_MSG_OFF: number /* no output */;
			readonly GLP_MSG_ERR: number /* warning and error messages only */;
			readonly GLP_MSG_ON: number /* normal output */;
			readonly GLP_MSG_ALL: number /* full output */;
			readonly GLP_MSG_DBG: number /* debug output */;

			/* solution status: */
			readonly GLP_UNDEF: number /* solution is undefined */;
			readonly GLP_FEAS: number /* solution is feasible */;
			readonly GLP_INFEAS: number /* solution is infeasible */;
			readonly GLP_NOFEAS: number /* no feasible solution exists */;
			readonly GLP_OPT: number /* solution is optimal */;
			readonly GLP_UNBND: number /* solution is unbounded */;

			version: string /* GLPK version */;
			write(lp: LP): string /* writes problem data in CPLEX LP */;
			solve(
				lp: LP,
				options?: number | Options
			): Result /* options is either a glp message level or an options obj */;
		}
	}
}

export {};
