<script lang="ts">
	import Button from "./Button.svelte";

	export let title: string;
	export let content: string;
	export let onDone: () => void;
	export let onEdit: () => void;
	export let onDelete: () => void;
</script>

<article>
	<h3>
		{title}
	</h3>
	<p>
		{content}
	</p>
	<section>
		<Button on:click={onDone}>
			Done
		</Button>
		<Button link on:click={onEdit}>
			Edit
		</Button>
		<Button color='secondary' on:click={onDelete}>
			Delete
		</Button>
	</section>
</article>

<style>
  article {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}

	h3 {
		color: var(--primary-color);
	}

  section {
		margin: .5rem 0;
	}
</style>
