<script>
  import './normalize.css'
  import './styles.css'
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Space+Mono&display=swap" rel="stylesheet">
</svelte:head>

<div class="app-container">
  <slot />
</div>

<style>
  .app-container {
    max-width: 720px;
    margin: auto;
    padding: 0 1rem;
    font-family: 'Space Mono', monospace;
  }
</style>
