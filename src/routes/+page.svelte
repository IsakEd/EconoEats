<script lang="ts">
	import exampleFoods from '$lib/exampleFoods';
	import FoodParameters from '../components/FoodParameters.svelte';
	import FoodTable from '../components/FoodTable.svelte';
	import Results from '../components/Results.svelte';
	import ActionButton from '$lib/ActionButton.svelte';
	import { language } from '../stores';
	import { currency } from '../stores';
	import lang from '$lib/lang';
	$: L = lang[$language];

	let results = '';
	$: showModal = !!results; //bang bang, you're boolean!

	async function optimizeOnServer() {
		const response = await fetch('/opti', {
			method: 'POST',
			body: JSON.stringify({ foods: foods, categoryLimits: limits }),
			headers: {
				'content-type': 'application/json'
			}
		});
		results = await response.json();
	}

	//Imports all the food from the "database"
	$: foods = structuredClone(exampleFoods[$language]);

	let limits: Limit[] = [
		{ name: 'fat', bounds: [100, 120] },
		{ name: 'carbs', bounds: [250, 300] },
		{ name: 'protein', bounds: [180, 200] }
	];

	let userRestrictions: SuitabilityCriteria = {
		vegan: false,
		vegetarian: false,
		lactose: false,
		gluten: false
	};

	function filterFoodsByRestrictions() {
		foods = structuredClone(exampleFoods[$language]).filter((food: Food) => {
			return Object.entries(userRestrictions).every(([key, value]) => {
				return !value || food.suitable[key as keyof SuitabilityCriteria];
			});
		});
	}
</script>

<FoodParameters {limits} {userRestrictions} on:change={filterFoodsByRestrictions} />
<FoodTable {foods} />
<div class="flex-row centered" id="optimize-button">
	<ActionButton sizeEm="1.5" on:click={optimizeOnServer}>{L.optimize}</ActionButton>
</div>

{#if results}
	<Results {showModal} {results} {foods} />
{/if}

<style>
	#optimize-button {
		width: 80%;
		margin: 1em 0;
	}
</style>
