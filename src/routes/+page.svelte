<script lang="ts">
  import List from '$lib/List.svelte';
  import type { PageData } from '.svelte-kit/types/src/routes/$types';
  import Code from '../lib/Code.svelte';

  export let data: PageData;
  $: casks = data.casks;
</script>

<main class="page">
  <form class="grid">
    <List title="aa" {casks} />
  </form>
  <Code />
</main>

<style>
  .page {
    position: relative;
    margin-inline: auto;
    max-width: 70rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
