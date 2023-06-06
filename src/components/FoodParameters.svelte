<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let limits: Limit[];
	export let userRestrictions: SuitabilityCriteria;

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
		calories: {calories[0]} - {calories[1]}
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
