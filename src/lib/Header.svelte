<script lang="ts">
  export let bangers: boolean = false;
</script>

<header>
  <h1 class:bangers>
    <slot />
  </h1>
  <slot name="subtitle" />
</header>

<style>
  header {
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  header h1 {
    color: var(--primary-color);
  }

  .bangers {
    font-family: 'Bangers', cursive;
  }
</style>
