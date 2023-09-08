<script lang="ts">
  import { getTimeFromNow } from '../utils/date';
  import Button from './Button.svelte';

  export let title: string;
  export let content: string;
  export let createdAt: string;
  export let onDone: () => Promise<void>;
  export let onEdit: () => void;

  let isDeleting = false;
</script>

<article data-testid="todo">
  <h3>
    {title}
  </h3>
  <p>
    {content}
  </p>
  <p class="created_at">
    Created {getTimeFromNow(createdAt)}
  </p>
  <section>
    <Button link on:click={onEdit}>Edit</Button>
    <Button
      color="secondary"
      on:click={() => {
        isDeleting = true;

        onDone().finally(() => (isDeleting = false));
      }}>Remove</Button
    >
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
    margin: 0.5rem 0;
  }

  p.created_at {
    color: var(--light-grey);
  }
</style>
