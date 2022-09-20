<script lang="ts">
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  import Icon from './Icon.svelte';
  import { elements } from './stores/elements';
  import { checked } from './stores/stores';

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
        return `
        transform: translate(${x}px, ${y}px);`;
      }
    };
  }
</script>

<section class="top-bar">
  <div class="code">
    <div class="terminal">
      <span>brew install</span>
      {#each $checked as id (id)}
        <span
          on:click={() => {
            $checked = $checked.filter((a) => a !== id);
          }}
          class="word"
          in:cmon={{ key: id }}
          animate:flip={{ duration: 600, easing: quintOut }}
        >
          {id}
        </span>
      {/each}
      <span class="caret" />
    </div>
    <Icon />
  </div>
</section>

<style>
  .caret {
    height: 1em;
    width: calc(var(--font-mono-width) * 1.4);
    background-color: var(--color-yellow);

    animation: blink-animation 1s steps(2, start) infinite;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }

  .top-bar {
    position: sticky;
    top: 0;
    width: 100%;

    background-color: hsl(0, 0%, 11%);
    box-shadow: 5px 5px 5px hsl(0, 0%, 0% / 20%);

    z-index: 100;
  }

  .code {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--max-width);
    margin: auto;
    padding-inline: 2em;
    padding-block: 1em;
    color: var(--color-yellow);
  }

  .terminal {
    width: 100%;
    font-size: 0.8rem;
    top: 0;
    font-family: var(--font-mono);
    display: flex;
    gap: var(--font-mono-width);
    flex-wrap: wrap;
  }
  .word {
    z-index: 100;
    cursor: pointer;
    transition: all 0.2s;
  }

  .word:hover {
    opacity: 0.6;
    color: red;
    text-decoration: line-through;
  }
</style>
