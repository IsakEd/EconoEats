<script>
	export let results;
	export let foods;

	const messagesFromCode = {
		1: {
			text: 'Error: solution is undefined',
			subtext: 'Try reloading the page or send a bug report'
		},
		2: {
			text: 'Solution is feasible',
			subtext: "So maybe that mean's it's good?"
		},
		3: {
			text: 'Solution is infeasible',
			subtext:
				'There is no solution to your requirements. Try adding more foods or increasing the upper limit'
		},
		4: {
			text: 'No feasible solution exists',
			subtext:
				'The requirements are too tight, there is no possible solution. Try adding more foods or increase the limits.'
		},
		5: {
			text: 'Optimal solution found!',
			subtext: 'This is the lowest cost to satisfy all requirements:'
		}
	};

	const { status, z, vars, dual } = results;
	const totalCalories = () => {
		let cals = 0;
		for (const [food, hectogram] of Object.entries(vars)) {
			try {
				// TODO: don't do this
				const { protein, carbs, fat } = foods.find((obj) => obj.name === food).data;
				cals += (4 * (protein + carbs) + 9 * fat) * hectogram;
			} catch {}
		}
		return cals;
	};
</script>

<div>
	<h1>{messagesFromCode[status].text}</h1>
	<h2>{messagesFromCode[status].subtext}</h2>
	{#each Object.keys(vars) as food}
		{#if vars[food] != 0}
			<div class="food-item">
				{(vars[food] * 100).toFixed(0)} grams of {food}
			</div>
		{/if}
	{/each}
	<h2>For the price of {z.toFixed(0)} kr</h2>
	<h2>Total calories: {totalCalories().toFixed(0)}</h2>
</div>
