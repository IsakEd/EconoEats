<script lang="ts">
	import exampleFoods from '$lib/exampleFoods';
	import FoodParameters from '../components/FoodParameters.svelte';
	import FoodTable from '../components/FoodTable.svelte';
	import postData from '$lib/postData';
	import Results from '../components/Results.svelte';
	import Modal from '$lib/Modal.svelte';

	let results = '';
	$: showModal = !!results;

	const optimizeOnServer = async () => {
		const res = await postData('/calculate', {
			foods: foods,
			categoryLimits: limits,
			foodItemLimits: foodItemLimits
		});
		results = res.result;
	};

	//Imports all the food from the "database"
	let foods = structuredClone(exampleFoods);

	let limits: Limit[] = [
		{ name: 'fat', bounds: [100, 120] },
		{ name: 'carbs', bounds: [250, 300] },
		{ name: 'protein', bounds: [180, 200] }
	];

	let foodItemLimits: Limit[] = foods.map((obj: Food) => {
		let limit: Limit = { name: obj.name, bounds: [0, 100] };
		return limit;
	});

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
</script>

<div><button on:click={optimizeOnServer}>OPTIMIZE</button></div>
<FoodParameters {limits} {userRestrictions} on:change={filterFoodsByRestrictions} />
<FoodTable {foods} {foodItemLimits} />
{#if results}
	<Modal {showModal}>
		<Results {results} />
	</Modal>
{/if}
