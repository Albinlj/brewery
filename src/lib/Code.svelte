<script lang="ts">
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import Icon from './Icon.svelte';
  import Prompt from './Prompt.svelte';
  import { elements } from './stores/elements';
  import { checked } from './stores/stores';
  import WelcomeMessage from './WelcomeMessage.svelte';

  let copied = false;
  let mounted = false;
  let introFinished = false;
  onMount(() => (mounted = true));

  function cmon(node: HTMLElement, { key }: { key: string }) {
    const from = $elements[key]?.getBoundingClientRect();
    const to = node?.getBoundingClientRect();
    const deltaX = from.x - to.x;
    const deltaY = from.y - to.y;

    const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    return {
      duration: distance * 2,
      css: (t: number) => {
        const eased = 1 - quintOut(t);
        const x = deltaX * eased;
        const y = deltaY * eased;
        return `transform: translate(${x}px, ${y}px) scale(${1 + eased});`;
      }
    };
  }
</script>

<section class="top-bar">
  <div class="content">
    <div class="code">
      <div>
        <Prompt />
        <WelcomeMessage />
      </div>
      <span>&nbsp;</span>
      <Prompt />
      <div class="brew-install-line " class:invert={copied}>
        <span class="blue">❯</span>

        <span class="">brew install</span>
        {#each $checked as id (id)}
          <span
            on:click={() => {
              $checked = $checked.filter((a) => a !== id);
            }}
            class="word"
            in:cmon={{ key: id }}
          >
            {id}
          </span>
        {/each}

        <span class="caret" />
      </div>
    </div>
    <Icon />
  </div>
</section>

<style>
  :global(a) {
    color: currentcolor;
  }

  .invert {
    filter: invert() brightness(0.6);
  }

  .top-bar {
    position: sticky;
    width: 100%;
    top: 0;

    background-color: hsl(0, 0%, 11%);
    box-shadow: 5px 5px 5px hsl(0, 0%, 0% / 20%);
    z-index: 100;
  }

  .content {
    display: flex;
    gap: 2em;
    color: var(--color-yellow);
    color: var(--color-type-70);
    max-width: var(--max-width);
    align-items: center;
    margin: auto;
    padding-inline: 3em;
    padding-block: 1em;
  }

  :global(.red) {
    color: var(--color-red);
  }
  :global(.blue) {
    color: var(--color-blue);
  }

  :global(.white) {
    color: var(--color-type-50);
  }
  :global(.green) {
    color: var(--color-green);
  }
  :global(.yellow) {
    color: var(--color-yellow);
  }

  .code {
    margin-top: -1.6em;
    flex: 1;
    font-family: var(--font-mono);
  }

  .brew-install-line {
    background-color: hsl(0, 0%, 11%);
    width: 100%;
    top: 0;
    display: flex;
    gap: 0 var(--font-mono-width);
    flex-wrap: wrap;
  }

  .word {
    transform-origin: -25% 0%;
    z-index: 100;
    cursor: pointer;
    transition: all 0.2s;
  }

  .word:hover {
    /* color: var(--color-red); */
    text-decoration: line-through;
  }

  .caret {
    height: 1em;
    width: calc(var(--font-mono-width) * 1.2);
    background-color: var(--color-yellow);

    animation: blink-animation 1s steps(2, start) infinite;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
</style>
