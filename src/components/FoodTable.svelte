<script lang="ts">
	import exampleFoods from '../lib/exampleFoods';
	let foods = JSON.parse(JSON.stringify(exampleFoods));
</script>

<table>
	<thead>
		<tr>
			<th> name </th>
			{#each Object.keys(foods[0].data) as attrib}
				<th>{attrib}</th>
			{/each}
			<th>preferences</th>
		</tr>
	</thead>
	<tbody>
		{#each foods as food}
			<tr>
				<td>
					{food.name}
				</td>
				{#each Object.values(foods[0].data) as value, i}
					<td style={i > 0 ? 'font-family: monospace' : ''}>{value}</td>
				{/each}
				<td>
					<input class="narrow" type="checkbox" />
					at least
					<input class="narrow" type="number" />
					maximum
					<input class="narrow" type="number" />
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
</style>
