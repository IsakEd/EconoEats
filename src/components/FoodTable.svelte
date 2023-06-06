<script lang="ts">
	import exampleFoods from '../lib/exampleFoods';
	import InputContainer from './InputContainer.svelte';
	interface Food {
		name: string;
		data: {
			price: number;
			kcal: number;
			carbs: number;
			fat: number;
			protein: number;
		};
		suitable: SuitabilityCriteria;
	}

	type SuitabilityCriteria = {
		vegan: boolean;
		vegetarian: boolean;
		lactose: boolean;
		gluten: boolean;
	};
	interface Limit {
		name: string;
		bounds: number[];
	}

	let foods = JSON.parse(JSON.stringify(exampleFoods));

	let limits: Limit[] = [
		{ name: 'fat', bounds: [60, 120] },
		{ name: 'carbs', bounds: [160, 300] },
		{ name: 'protein', bounds: [140, 200] }
	];

	let userRestrictions: SuitabilityCriteria = {
		vegan: false,
		vegetarian: false,
		lactose: false,
		gluten: false
	};

	function filterFoodsByRestrictions() {
		foods = JSON.parse(JSON.stringify(exampleFoods)).filter((food: Food) => {
			return Object.entries(userRestrictions).every(([key, value]) => {
				return !value || food.suitable[key as keyof SuitabilityCriteria];
			});
		});
	}

	$: userRestrictions, filterFoodsByRestrictions();
</script>

<button on:click={() => console.log(userRestrictions)} />
<div id="content" class="">
	<InputContainer title="Macronutrient goals">
		{#each limits as goal}
			<div class="flex-col centered bounds">
				<p>{goal.name}</p>
				<input name="{goal.name}-upper" type="number" bind:value={goal.bounds[1]} />
				<input name="{goal.name}-lower" type="number" bind:value={goal.bounds[0]} />
			</div>
		{/each}
	</InputContainer>
	<InputContainer title="Dietary restrictions">
		{#each Object.keys(userRestrictions) as restriction}
			{#if restriction === 'vegan' || restriction === 'vegetarian' || restriction === 'lactose' || restriction === 'gluten'}
				<div class="flex-col centered">
					<p>{restriction}</p>
					<input name="carbs-upper" type="checkbox" bind:checked={userRestrictions[restriction]} />
				</div>
			{/if}
		{/each}
	</InputContainer>
</div>

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
				{#each Object.values(food.data) as value, i}
					<td style="font-family: monospace">{value}</td>
				{/each}
				<td>
					weekly minimum
					<input class="narrow" type="number" />
					weekly maximum
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

	#content {
		width: fit-content;
		margin-left: 1em;
	}

	.bounds {
		padding: 0 1em;
	}

	input {
		width: 6em;
		margin-top: 0.5em;
	}
</style>
