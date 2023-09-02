<script lang="ts">
	export let name: string;
	export let error = false;
	export let label: string = '';
	export let helperText: string = '';
  export let placeholder: string | undefined = undefined;
	export let value: string = '';
</script>

<div class:error>
	<label for="{name}-label">{label}</label>
	<textarea
		name={name}
		value={value}
		id="{name}-label"
    rows={2}
		placeholder={placeholder}
		aria-describedby="{name}-helper-text"
		on:input
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

	div textarea {
		padding: 0.5rem;
		border: 2px solid var(--light-grey);
		outline: 0;
    resize: vertical;
	}

	div textarea:focus {
		border-color: var(--primary-color);
    box-shadow: 2px 2px black;
	}

	div.error textarea {
		border-color: var(--error-color);
	}
</style>
