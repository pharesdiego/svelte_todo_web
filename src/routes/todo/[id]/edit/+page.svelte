<script lang="ts">
	import Header from '$lib/Header.svelte';
	import TodoForm from '$lib/TodoForm.svelte';
	import type { PageServerData, ActionData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;

	let isUpdating = false;
</script>

<Header bangers>Edit your todo</Header>

<section>
	<TodoForm
		onFormStatusChange={(status) => (isUpdating = status === 'submitting')}
		shouldReset={false}
		ctaText="Edit todo"
		todo={{
			title: data.todo.title,
			content: data.todo.content
		}}
	/>
</section>

{#if isUpdating}
	<p data-testid="edit-loading-msg">Updating...</p>
{/if}

{#if form?.success && isUpdating === false}
	<p data-testid="edit-done-msg">Successfully updated!</p>
{/if}
