<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';
	import Todo from '$lib/Todo.svelte';
	import TodoForm from '$lib/TodoForm.svelte';
	import { deleteTodoById, fetchTodos } from '../services/todos';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: todos = data.todos;
</script>

<svelte:head>
	<title>Todos App</title>
</svelte:head>

<Header bangers>
	Mbappé's favorite todos app
	<p slot="subtitle">(or maybe not)</p>
</Header>

<section>
	<h2>Anything new to do?</h2>
	<TodoForm ctaText="Add todo" />
</section>

<section>
	<h2>Things you haven't done for some reason</h2>
	{#each todos as todo (todo.id)}
		<Todo
			{...todo}
			onEdit={() => goto(window.location.href + `todo/${todo.id}/edit`)}
			onDone={() =>
				deleteTodoById(todo.id).then(() => {
					todos = todos.filter((t) => t.id !== todo.id);
				})}
		/>
	{/each}
</section>

<style>
	section {
		margin-bottom: 2rem;
	}

	section :global(article) {
		border-bottom: 2px dashed var(--primary-color);
	}

	h2 {
		color: var(--primary-color);
		outline: 2px solid #b13b18;
		padding: 1rem;
		margin-bottom: 2rem;
	}
</style>
