<script>
	export let results;
	export let foods;
	const { status, z, vars, dual } = results;
	const totalCalories = () => {
		let cals = 0;
		for (const [food, hectogram] of Object.entries(vars)) {
			const { protein, carbs, fat } = foods.find((obj) => obj.name === food).data;
			cals += (4 * (protein + carbs) + 9 * fat) * hectogram;
		}
		return cals;
	};
</script>

<div>
	<h1>Price-optimal solution found!</h1>
	{#each Object.keys(vars) as food}
		{#if vars[food] != 0}
			<div class="food-item">
				{(vars[food] * 100).toFixed(0)} grams of {food}
			</div>
		{/if}
	{/each}
	<h2>For the price of {z.toFixed(0)} kr</h2>
	<h2>Total calories: {totalCalories()}</h2>
</div>
