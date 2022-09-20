<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { checked } from './stores/stores';

  function copyContent() {
    showCopied = true;
    const terminalCommand = $checked.join(' ');
    navigator.clipboard.writeText('brew install ' + terminalCommand);
  }

  let showCopied = false;
</script>

<div class="wrap">
  {#if showCopied}
    <span
      on:introend={() => (showCopied = false)}
      in:fly={{ y: 20, duration: 400, easing: quintOut, opacity: 0 }}
      out:fade={{ duration: 200, delay: 500 }}
      class="copied">Copied!</span
    >
  {/if}
  <button on:click={copyContent} class="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        fill="currentcolor"
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
      />
    </svg>
  </button>
</div>

<style>
  .wrap {
    display: flex;
    justify-content: center;
  }

  .button {
    all: unset;
    padding: 0.5rem;
    cursor: pointer;
  }

  .copied {
    position: absolute;
    color: var(--color-type-20);
    font-size: 0.8em;
    background-color: var(--color-yellow);
    padding: 0.2em 0.4em;
    padding: 0.2em 0.8em;
    border-radius: 0.6em;
    border-radius: 1em;
    font-family: var(--font-mono);
    /* border: 2px solid var(--color-type-20); */
    font-weight: 500;
    top: 1em;
  }
</style>
