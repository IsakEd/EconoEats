<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	//let calories: number[] = [0, 2500];
	interface Limit {
		name: string;
		bounds: number[];
	}

	interface Restriction {
		name: string;
		checked: boolean;
	}

	let limits: Limit[] = [
		{ name: 'fat', bounds: [60, 120] },
		{ name: 'carbohydrates', bounds: [160, 300] },
		{ name: 'protein', bounds: [140, 200] }
	];

	let restrictions: Restriction[] = [
		{ name: 'vegan', checked: false },
		{ name: 'vegetarian', checked: false },
		{ name: 'lactose', checked: false },
		{ name: 'paleo', checked: false },
		{ name: 'keto', checked: false }
	];
</script>

<div id="content" class="">
	<InputContainer title="Macronutrient goals">
		{#each limits as goal}
			<div class="flex-col centered bounds">
				<p>{goal.name}</p>
				<input name="{goal.name}-upper" type="number" bind:value={goal.bounds[0]} />
				<input name="{goal.name}-lower" type="number" bind:value={goal.bounds[1]} />
			</div>
		{/each}
	</InputContainer>
	<InputContainer title="Dietary restrictions">
		{#each restrictions as restriction}
			<div class="flex-col centered">
				<p>{restriction.name}</p>
				<input name="carbohydrates-upper" type="checkbox" bind:value={restriction.checked} />
			</div>
		{/each}
	</InputContainer>
</div>

<style>
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
