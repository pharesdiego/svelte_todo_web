<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Textarea from '$lib/Textarea.svelte';

	export let ctaText: string;
	export let todo: { title: string; content: string } = { title: '', content: '' };
	export let shouldReset = true;
	export let onFormStatusChange: (status: 'submitting' | 'submitted') => void = () => null;
</script>

<form
	method="POST"
	use:enhance={() => {
		onFormStatusChange('submitting');
		return async ({ update }) => {
			await update({ reset: shouldReset });
			onFormStatusChange('submitted');
		};
	}}
>
	<Input required name="title" value={todo.title} label="Title" helperText="A nice title" />
	<Textarea
		required
		name="content"
		value={todo.content}
		label="Content"
		helperText="Literally the content you wish your Todo to have"
	/>
	<Button type="submit">
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
