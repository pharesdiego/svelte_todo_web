<script lang="ts">
	export let name: string;
	export let error = false;
	export let label: string = '';
	export let helperText: string = '';
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	export let required = false;
</script>

<div class:error>
	<label for="{name}-label">{label}</label>
	<input
		{required}
		{name}
		{value}
		id="{name}-label"
		{placeholder}
		aria-describedby="{name}-helper-text"
	/>
	<span id="{name}-helper-text">
		{#if helperText}
			{helperText}
		{/if}
	</span>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	span {
		color: var(--light-grey);
	}

	div input {
		padding: 0.5rem;
		border: 2px solid var(--light-grey);
		outline: 0;
	}

	div input:focus {
		border-color: var(--primary-color);
		box-shadow: 2px 2px black;
	}

	div.error input {
		border-color: var(--error-color);
	}
</style>
