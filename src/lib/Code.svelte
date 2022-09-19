<script lang="ts">
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  import { elements } from './stores/elements';
  import { checked } from './stores/stores';

  function cmon(node: HTMLElement, { key }: { key: string }) {
    const from = $elements[key]?.getBoundingClientRect();
    const to = node?.getBoundingClientRect();

    return {
      duration: 600,
      css: (t: number) => {
        const eased = 1 - quintOut(t);
        const x = (from.x - to.x) * eased;
        const y = (from.y - to.y) * eased;
        return `
        transform: translate(${x}px, ${y}px);
        opacity: ${quintOut(t)}
        `;
      }
    };
  }
</script>

<div class="code">
  <span>brew install</span>
  {#each $checked as id (id)}
    <span
      on:click={(s) => {
        console.log('noo');
        $checked = $checked.filter((a) => a !== id);
      }}
      class="word"
      in:cmon={{ key: id }}
      animate:flip={{ duration: 600, easing: quintOut }}
    >
      &nbsp;{id}
    </span>
  {/each}
</div>

<style>
  .code {
    position: absolute;
    top: 0;
    padding: 2em;
    font-family: var(--font-mono);
    display: flex;
    flex-wrap: wrap;
  }

  .word {
    cursor: pointer;
    transition: all 0.2s;
  }

  .word:hover {
    opacity: 0.6;
    color: red;
    text-decoration: line-through;
  }
</style>
