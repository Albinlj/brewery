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
    </div>
    <div class="copy">
      <Icon />
    </div>
  </div>
</section>

<style>
  .top-bar {
    position: sticky;
    z-index: 100;
    background-color: hsl(0, 0%, 10%);
  }
  .code {
    display: flex;
    max-width: var(--max-width);
    margin: auto;
    padding-block: 2em;
    color: greenyellow;
  }

  .copy {
  }

  .terminal {
    width: 100%;
    font-size: 0.8rem;
    top: 0;
    font-family: var(--font-mono);
    display: flex;
    gap: 0.5em;
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
