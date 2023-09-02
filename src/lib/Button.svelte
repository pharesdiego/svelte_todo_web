<script lang='ts' context='module'>
  export type ButtonColors = 'primary' | 'secondary';
</script>

<script lang='ts'>
	import type { HTMLButtonAttributes } from "svelte/elements";

	export let link: boolean = false;
	export let color: ButtonColors = 'primary';
	export let type: HTMLButtonAttributes['type'] = 'button';
</script>

<button
  on:click
	type={type}
	role={link ? 'link' : null}
  class:secondary={color === 'secondary'}
>
	<slot />
</button>

<style>
	button {
		outline: 0;
		margin: 0;
		border: 0;
		padding: 0.5rem 1rem;
		cursor: pointer;
		transition: all 0.2s;
    background-color: var(--primary-color);
    color: white;
	}

  button.secondary {
    background-color: var(--light-grey);
    color: white;
  }

	button:hover, button:active, button:focus {
    box-shadow: 2px 2px black;
	}
</style>
