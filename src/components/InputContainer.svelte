<script lang="ts">
	//let calories: number[] = [0, 2500];
	let fat: number[] = [60, 120];
	let carbohydrates: number[] = [160, 300];
	let protein: number[] = [120, 180];

	export let title: string;
</script>

<h2>{title}</h2>
<div id="input-area" class="flex-row centered">
	<slot />
</div>

<style>
	#input-area {
		width: fit-content;
		margin: 1em 0;
	}

	h2 {
		background-color: var(--secondary-em);
		color: white;
		padding: 8px;
	}
</style>
