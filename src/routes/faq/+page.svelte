<h1><i>Feasibly</i> asked questions</h1>
<ul>
	<li>How does it work?</li>
	<p>
		The app's calculation logic utilizes the simplex method, an optimization technique. It involves
		representing the problem as a set of linear equations and inequalities. These equations define
		the constraints and objective function to be optimized. By iteratively exploring corner points
		of a geometric shape called the feasible region, the simplex method determines valid
		combinations of variables that adhere to the given limitations. During each iteration, the
		method assesses the current corner point's potential for improving the objective function. It
		accomplishes this by transitioning to an adjacent corner point that yields a better objective
		function value while still satisfying the constraints.
	</p>
	<p>
		In this context, the variables represent different foods, and their respective prices act as
		coefficients in the cost function, which reflects the total cost of the assembled food. Merely
		solving this linear equation without constraints would result in an inexpensive solution: not
		consuming any food. This is where constraints become crucial. They enable the inclusion of
		additional factors that must be considered. The algorithm continues to move from one corner
		point to another until it arrives at the optimal solution, which is the corner point providing
		the best possible value for the objective function while adhering to all constraints.
	</p>
	<p>
		The simplex method operates by systematically navigating through various corner points,
		evaluating the objective function at each point, and transitioning to adjacent points that
		enhance the objective value. It ensures that each transition satisfies the constraints until it
		identifies the corner point that maximizes or minimizes the objective. Once the optimal solution
		is found, the simplex method provides the variable values that yield the most favorable outcome
		based on the given constraints and objective function.
	</p>
	<p>
		<b>TL;DR:</b> The simplex method is an algorithm that explores different corner points within a feasible
		region to discover the optimal solution for an optimization problem. It progresses from one corner
		point to another, improving the objective value while upholding the constraints, until it attains
		the best possible outcome.
	</p>
	<li>Why doesn't it work?</li>
	<p>
		There can be different reasons why a solution isn't found.
		<b>No feasible solution exists</b> is the most common error and arises when the restrictions and
		bounds are too tight. The most common cause for this is that you simply haven't allowed enough food
	</p>

	<p>
		If you have a high protein minimum requirement and at the same time have a very low carbohydrate
		or fat maximum requirement, it will likely be impossible to meet these requirements if you also
		haven't included a very lean protein source like protein powder or chicken breast.
	</p>
</ul>

<style>
	li {
		font-size: large;
		font-weight: bold;
	}

	h1 {
		font-size: larger;
	}
	p {
		margin-bottom: 1em;
	}
</style>
