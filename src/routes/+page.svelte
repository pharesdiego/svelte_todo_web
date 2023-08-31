<script lang="ts">
	import Todo from './Todo.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Todos App</title>
</svelte:head>

<header>
	<h1>Mbappé's favorite todos app</h1>
	<p>(or maybe not)</p>
</header>

{#each data.todos as todo (todo.id)}
	<Todo {...todo}/>
{/each}

<style>
	header {
		padding: 1rem;
		margin-bottom: 1rem;
	}

	header h1 {
		font-family: 'Bangers', cursive;
		text-align: center;
	}

	header p {
		text-align: center;
	}
</style>
