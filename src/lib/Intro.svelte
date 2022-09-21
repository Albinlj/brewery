<script lang="ts">
  import { onMount } from 'svelte';
  import Typewriter from './Typewriter.svelte';

  const messages = [
    'Choose casks to install. ',
    'Press the copy button. ',
    'Paste in terminal. '
  ];

  let num = 0;
  onMount(() => {
    num = 1;
  });
  $: trim = messages.slice(0, num);

  export let isIntroFinished = false;
</script>

<span class="blue">❯</span>

{#each trim as m}
  <Typewriter
    on:end={() => {
      if (num < messages.length) num++;
      else isIntroFinished = true;
    }}
    message={m}
  />
{/each}
