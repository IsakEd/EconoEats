<script lang="ts">
	import InputContainer from './InputContainer.svelte';
	import Button from '$lib/Button.svelte';
	import ButtonGroup from '$lib/ButtonGroup.svelte';
	import FoodTable from './FoodTable.svelte';
	type FoodCategories = Array<keyof FoodCategory>;
	const foodCatorories: FoodCategories = ['fruit', 'vegetable', 'junk', 'dairy', 'grain'];

	export let limits: Limit[];
	export let userRestrictions: SuitabilityCriteria;

	let strictness = ['strict'];

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
			lim.bounds[1] = lim.bounds[0] * (strictness[0] == 'strict' ? 1.05 : 1.2);
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
	<div id="button-group" class="line flex-row">
		<ButtonGroup mandatory bind:value={strictness}>
			<Button value="strict">strict</Button>
			<Button value="relaxed">relaxed</Button>
		</ButtonGroup>
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
	<InputContainer title="Food group limits">
		<div class="flex-row" id="icon-row">
			{#each foodCatorories as name}
				<img class="icon" src="/icons/{name}.svg" alt={name} />
			{/each}
		</div>
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
		justify-content: space-around;
	}

	#icon-row {
		width: 100%;
		align-content: space-between;
	}
	.icon {
		height: 1.5em;
	}
</style>
