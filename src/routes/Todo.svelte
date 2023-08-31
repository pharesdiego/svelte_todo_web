<script lang="ts">
	export let id: string;
	export let title: string;
	export let content: string;
</script>

<article>
	<h2>
		{title}
	</h2>
	<p>
		{content}
	</p>
	<a href="/todo/{id}" aria-label='Edit the entry "{title}"'>
    Edit this entry
  </a>
</article>

<style>
  article {
		margin-bottom: 2rem;
	}

	h2 {
		color: var(--primary-color);
	}

  a {
    color: var(--primary-color);
  }
</style>
