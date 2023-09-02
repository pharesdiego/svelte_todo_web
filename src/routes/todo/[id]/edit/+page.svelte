<script lang="ts">
	import Header from '$lib/Header.svelte';
	import TodoForm from '$lib/TodoForm.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Header bangers>Edit your todo</Header>

<TodoForm
	ctaText="Edit todo"
	todo={{
		title: data.todo.title,
		content: data.todo.content
	}}
/>
