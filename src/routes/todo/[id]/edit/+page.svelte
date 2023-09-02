<script lang="ts">
	import Header from "$lib/Header.svelte";
	import TodoForm from "$lib/TodoForm.svelte";

</script>

<Header bangers>
  Edit your todo
</Header>

<TodoForm
  ctaText='Edit todo'
  todo={{
    title: 'edited',
    content: 'dsadasdadD'
  }}
/>
