<script>
	export let sizeEm;
</script>

<button on:click type="submit" class="action-button" style="font-size: {sizeEm}em;"><slot /></button
>

<style>
	.action-button {
		color: var(--primary-color);
		border-radius: 15px;
		background-color: var(--primary-em);
		border: 2px solid var(--primary-em);
		padding: 0.2em;
	}
	.action-button :hover {
		background-color: var(--primary-color) !important;
	}
</style>
