<script lang="ts">
	import Header from "$lib/Header.svelte";
	import { onDestroy } from "svelte";
  let timer = 5

  let interval_id = setInterval(() => {
    timer -= 1
  }, 1000)

  $: if (timer === 0) {
    window.location.reload()
  }

  onDestroy(() => {
    clearInterval(interval_id)
  })

</script>

<Header bangers>
	Mbappé's favorite todos app
	<p slot="subtitle">(or maybe not)</p>
</Header>

<p>
  This error is actually expected! The API takes some time to load. Retrying again in {timer} secs
</p>
