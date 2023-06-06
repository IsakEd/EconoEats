<script lang="ts">
	export let foods: Food[];

	let limits: Limit[] = [
		{ name: 'fat', bounds: [60, 120] },
		{ name: 'carbs', bounds: [160, 300] },
		{ name: 'protein', bounds: [140, 200] }
	];

	$: calories = (() => {
		let lowerCals = 0;
		let upperCals = 0;
		limits.forEach((limit) => {
			if (limit.name == 'carbs' || limit.name == 'protein') {
				lowerCals += 4 * limit.bounds[0];
				upperCals += 4 * limit.bounds[1];
			} else if (limit.name == 'fat') {
				lowerCals += 9 * limit.bounds[0];
				upperCals += 9 * limit.bounds[1];
			}
		});
		return [lowerCals, upperCals];
	})();

	let foodItemLimits: Limit[] = foods.map((obj: Food) => {
		let limit: Limit = { name: obj.name, bounds: [0, 9999] };
		return limit;
	});
</script>

<table>
	<thead>
		<tr>
			<th> name </th>
			{#each Object.keys(foods[0].data) as attrib}
				<th>{attrib}</th>
			{/each}
			<th>weekly min</th>
			<th>weekly max</th>
		</tr>
	</thead>
	<tbody>
		{#each foods as food, i}
			<tr>
				<td>
					{food.name}
				</td>
				{#each Object.values(food.data) as value}
					<td style="font-family: monospace">{value}</td>
				{/each}
				<td>
					<input class="narrow" type="number" bind:value={foodItemLimits[i].bounds[0]} />
				</td>
				<td>
					<input class="narrow" type="number" bind:value={foodItemLimits[i].bounds[1]} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		width: 80%;
	}

	th,
	td {
		padding: 8px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	tr:hover {
		background-color: #f5f5f5;
	}

	th {
		background-color: var(--primary-em);
		color: white;
	}
	.narrow {
		width: 4em;
	}

	input {
		width: 6em;
		margin-top: 0.5em;
	}
</style>
