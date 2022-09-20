<script lang="ts">
  import List from '$lib/List.svelte';
  import type { PageData } from '.svelte-kit/types/src/routes/$types';
  import Code from '../lib/Code.svelte';

  export let data: PageData;
  $: casks = data.casks;
</script>

<main class="page">
  <Code />
  <form class="grid">
    <List {casks} />
  </form>
</main>

<style>
  .page {
    position: relative;
    margin-inline: auto;
    max-height: 100vh;

    display: grid;
  }
  .grid {
    margin: auto;
    max-width: var(--max-width);
    overflow: hidden;
  }
</style>
