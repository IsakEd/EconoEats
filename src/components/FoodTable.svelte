<script lang="ts">
	export let foods: Food[];
</script>

<table>
	<thead>
		<tr>
			<th> name </th>
			{#each Object.keys(foods[0].data) as attrib}
				<th>{attrib}</th>
			{/each}
			<th>min (g)</th>
			<th>max (g)</th>
		</tr>
	</thead>
	<tbody>
		{#each foods as food, i}
			<tr>
				<td>
					{food.name}
				</td>
				{#each Object.values(food.data) as value}
					<td style="font-family: monospace">{parseFloat(value.toFixed(1))}</td>
				{/each}
				<td>
					<input class="narrow" type="number" bind:value={food.bounds[0]} />
				</td>
				<td>
					<input class="narrow" type="number" bind:value={food.bounds[1]} />
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
		background-color: var(--secondary-em);
		color: white;
	}
	.narrow {
		width: 3em;
	}
</style>
