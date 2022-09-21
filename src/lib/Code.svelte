<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import Caret from './Caret.svelte';
  import Icon from './Icon.svelte';
  import Prompt from './Prompt.svelte';
  import { elements } from './stores/elements';
  import { checked } from './stores/stores';
  import Intro from './Intro.svelte';
  import { flip } from 'svelte/animate';
  import Typewriter from './Typewriter.svelte';

  let copied = false;
  let introFinished = false;

  function cmon(node: HTMLElement, { key }: { key: string }) {
    const from = $elements[key]?.getBoundingClientRect();
    const to = node?.getBoundingClientRect();
    const deltaX = from.x - to.x;
    const deltaY = from.y - to.y;

    return {
      duration: 500,
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
      <Intro bind:isIntroFinished={introFinished} />
      {#if introFinished}
        <div>
          <span>&nbsp;</span>
        </div>
        <Prompt />
        <div class="brew-install-line " class:invert={copied}>
          <span class="blue">❯</span>

          <Typewriter message="brew install" />
          {#each $checked as id (id)}
            <span
              on:click={() => {
                $checked = $checked.filter((a) => a !== id);
              }}
              class="word"
              in:cmon={{ key: id }}
              animate:flip={{ duration: 100 }}
            >
              {id}
            </span>
          {/each}

          <Caret />
          <span class="caret" />
        </div>
      {/if}
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
    z-index: 5;
  }

  .content {
    display: flex;
    gap: 2em;
    color: var(--color-yellow);
    color: var(--color-type-70);
    max-width: var(--max-width);
    margin: auto;
    padding-inline: 3em;
    padding-block: 1em;
    min-height: 7em;
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
</style>
