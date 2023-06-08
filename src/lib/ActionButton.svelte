<script>
</script>

<button on:click type="submit" class="action-button"><slot /></button>

<style>
	.action-button {
		color: var(--accent-color);
		border-radius: 5px;
		background-color: var(--secondary-color);
		border: 1px solid var(--accent-color);
	}
	.action-button :hover {
		background-color: var(--contrast-color) !important;
	}
</style>
