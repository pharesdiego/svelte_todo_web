<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Textarea from '$lib/Textarea.svelte';

	export let ctaText: string;
	export let todo: { title: string; content: string } = { title: '', content: '' };
</script>

<form on:submit|preventDefault={(e) => console.log(e)}>
	<Input name="title" value={todo.title} label="Title" helperText="A nice title" />
	<Textarea
		name="content"
		value={todo.content}
		label="Content"
		helperText="Literally the content you wish your Todo to have"
	/>
	<Button type='submit'>
		{ctaText}
	</Button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
