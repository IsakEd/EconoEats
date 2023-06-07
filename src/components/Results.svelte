<script>
	export let results;
	const { status, z, vars, dual } = results;
</script>

<div>
	<h1>Price-optimal solution found!</h1>
	{#each Object.keys(vars) as food}
		{#if vars[food] != 0}
			<div class="food-item">
				{vars[food] * 100} grams of {food}
			</div>
		{/if}
	{/each}
</div>
