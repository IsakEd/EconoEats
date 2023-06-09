<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let limits: Limit[];
	export let userRestrictions: SuitabilityCriteria;

	let strictness: 'strict' | 'relaxed' = 'relaxed';

	const calculateCalories = () => {
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
	};

	const updateBounds = () => {
		limits = limits.map((lim) => {
			lim.bounds[1] = lim.bounds[0] * (strictness == 'strict' ? 1.05 : 1.2);
			calories = calculateCalories();
			return lim;
		});
	};
	$: strictness, updateBounds();

	let calories = calculateCalories();
</script>

<div id="content" class="">
	<InputContainer title="Macronutrient goals">
		{#each limits as goal, i}
			<div class="flex-col centered bounds">
				<p>{goal.name}</p>
				<input
					name="{goal.name}-lower"
					type="number"
					bind:value={goal.bounds[0]}
					on:input={updateBounds}
				/>
			</div>
		{/each}
	</InputContainer>
	<div class="line">
		calories: <span style="font-family: monospace; font-size: 1.2em;"
			>{calories[0].toFixed(0)} - {calories[1].toFixed(0)}</span
		>
	</div>
	<div class="line">
		<label>
			<input type="radio" bind:group={strictness} value="strict" />
			strict
		</label>

		<label>
			<input type="radio" bind:group={strictness} value="relaxed" />
			relaxed
		</label>
	</div>

	<InputContainer title="Dietary restrictions">
		{#each Object.keys(userRestrictions) as restriction}
			{#if restriction === 'vegan' || restriction === 'vegetarian' || restriction === 'lactose' || restriction === 'gluten'}
				<div class="flex-col centered">
					<p>{restriction}</p>
					<input
						name="carbs-upper"
						type="checkbox"
						bind:checked={userRestrictions[restriction]}
						on:change
					/>
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

	.line {
		margin-bottom: 1em;
		text-align: center;
	}
</style>
