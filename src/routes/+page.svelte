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
		console.log(foods);
		const res = await postData('/calculate', {
			foods: foods,
			categoryLimits: limits
		});
		results = res.result;
	};

	//Imports all the food from the "database"
	//let foods = structuredClone(exampleFoods);  ! Incompatible with EC2 Node version
	let foods = JSON.parse(JSON.stringify(exampleFoods));

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
		foods = JSON.parse(JSON.stringify(exampleFoods)).filter((food: Food) => {
			return Object.entries(userRestrictions).every(([key, value]) => {
				return !value || food.suitable[key as keyof SuitabilityCriteria];
			});
		});
	}
</script>

<FoodParameters {limits} {userRestrictions} on:change={filterFoodsByRestrictions} />
<FoodTable {foods} />
<div><button on:click={optimizeOnServer}>OPTIMIZE</button></div>

{#if results}
	<Modal {showModal}>
		<Results {results} {foods} />
	</Modal>
{/if}
