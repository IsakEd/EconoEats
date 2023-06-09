<script>
	import { getContext } from 'svelte';
	import { BUTTON_GROUP } from './ButtonGroup.svelte';
	const { selectButton, values } = getContext(BUTTON_GROUP);

	export let value;
	export let active = true;
	$: active = $values.includes(value);
</script>

<button on:click={() => selectButton(value)} class:active>
	<slot />
</button>

<style>
	button {
		font-size: large;
		color: var(--bleak);
		border: 2px solid var(--bleak);
		background-color: transparent;
		border-radius: 10px;
		border-color: var(--bleak);
	}

	.active {
		color: var(--primary-em);
		border-color: var(--primary-em);
	}
</style>
