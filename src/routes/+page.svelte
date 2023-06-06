<script lang="ts">
	import exampleFoods from '$lib/exampleFoods';
	import FoodParameters from '../components/FoodParameters.svelte';
	import FoodTable from '../components/FoodTable.svelte';

	//Imports all the food from the "database"
	let foods = JSON.parse(JSON.stringify(exampleFoods));

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

	let limits: Limit[] = [
		{ name: 'fat', bounds: [60, 120] },
		{ name: 'carbs', bounds: [160, 300] },
		{ name: 'protein', bounds: [140, 200] }
	];

	let foodItemLimits: Limit[] = foods.map((obj: Food) => {
		let limit: Limit = { name: obj.name, bounds: [0, 9999] };
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

<button
	on:click={() => {
		console.log(userRestrictions);
	}}>test</button
>
optinut is the optimum nutrition for the cheapest dough
<FoodParameters {limits} {userRestrictions} on:change={filterFoodsByRestrictions} />
<FoodTable {foods} {foodItemLimits} />
