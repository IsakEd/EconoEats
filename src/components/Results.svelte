<script>
	import ActionButton from '$lib/ActionButton.svelte';
	import Modal from '$lib/Modal.svelte';
	import PieChart from '$lib/PieChart.svelte';
	import { currency, language } from '../stores';
	import lang from '$lib/lang';
	import messagesFromCode from '$lib/messagesFromCode';
	$: L = lang[$language];

	export let results;
	export let foods;
	export let showModal;
	let edited = false;

	const deleteFood = (foodname) => {
		const foodsCopy = [...foods];
		const newFoods = foodsCopy.splice(foodsCopy.findIndex((food) => food.name === foodname));
		foods = newFoods;
		// TODO: find out if this creates a memleak!
	};
	const changeLimit = (foodname, increment) => {
		// TODO: There's a smarter way to do this while still keeping reactivity, find it
		const newFoods = [...foods];
		const idx = newFoods.findIndex((food) => food.name === foodname);
		if (idx !== -1) {
			newFoods[idx].bounds[1] += increment;
			foods = newFoods;
		}
		foods = newFoods;
		edited = true;
	};

	// Gets the variables from the GLPK software
	const { status, z, vars, dual } = results;

	const calculateMacros = () => {
		let cals = 0;
		let totalCarbs = 0;
		let totalFat = 0;
		let totalProtein = 0;
		for (const [food, hectogram] of Object.entries(vars)) {
			try {
				// TODO: don't do this
				const { protein, carbs, fat } = foods.find((obj) => obj.name === food).data;
				totalCarbs += hectogram * carbs;
				totalFat += hectogram * fat;
				totalProtein += hectogram * protein;
				cals += (4 * (protein + carbs) + 9 * fat) * hectogram;
			} catch {} //TODO: add error handling
		}
		return {
			calories: cals,
			carbs: totalCarbs,
			fat: totalFat,
			protein: totalProtein
		};
	};
	const macros = calculateMacros();
</script>

<Modal {showModal} status={messagesFromCode[status]}>
	<div>
		<h2 style="margin-bottom: .2em;">{messagesFromCode[status].subtext[$language]}</h2>
		<div id="saved" class="subtle flex-row">
			{L.saved}
			{$currency.fractional} per 100g {L.increased_allowance}
		</div>
		{#each Object.keys(vars) as food}
			{#if vars[food] != 0}
				<div class="food-item">
					<div><b>{parseFloat((vars[food] * 100).toFixed(0))}</b> {L.partitive} <b>{food}</b></div>
					<div class="dual subtle">
						{(-100 * dual[food]).toFixed(2)}
					</div>
					<!-- 				<div>
					<button class="invisible subtle" on:click={() => changeLimit(food, -10)}>-10</button>
					<button class="invisible subtle" on:click={() => changeLimit(food, -100)}>-100</button>
					<button class="invisible" on:click={deleteFood(food)} style="color: red">X</button>
					<button class="invisible subtle" on:click={() => changeLimit(food, 100)}>+100</button>
					<button class="invisible subtle" on:click={() => changeLimit(food, 10)}>+10</button>
				</div> -->
				</div>
			{/if}
		{/each}
		<h2>
			{L.costs}
			<span id="price" style={`color: ${status == 5 ? 'green' : 'red'};`}>{z.toFixed(2)}</span>
			{$currency.plural}
		</h2>
		<h2>{L.total_cals} {macros.calories.toFixed(0)} kcal</h2>
	</div>
	<div id="chart" class="flex-row centered">
		<div style="width: 80%;">
			<PieChart
				chartData={[macros.carbs * 4, macros.protein * 4, macros.fat * 9]}
				chartLabels={[
					`carbs (${macros.carbs.toFixed(0)}g)`,
					`protein (${macros.protein.toFixed(0)}g)`,
					`fat (${macros.fat.toFixed(0)}g) `
				]}
			/>
		</div>
	</div>
	{#if edited}
		<ActionButton>Recalculate</ActionButton>
	{/if}
</Modal>

<style>
	.subtle {
		font-style: italic;
		color: gray;
		font-size: 0.7em;
	}
	.food-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.3em;
	}

	#saved {
		justify-content: end;
		margin-bottom: 0.2em;
	}
</style>
