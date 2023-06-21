import GLPK from 'glpk.js';
import Problem from './Problem.js';

function solveLP(foods, categoryLimits, foodItemLimits) {
	const glpk = GLPK();
	return glpk.solve(new Problem(foods, categoryLimits, foodItemLimits));
}

export default solveLP;
