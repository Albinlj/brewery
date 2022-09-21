<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  function typewriter(node: HTMLElement) {
    const text = node.textContent ?? '';
    const duration = text.length / (5 * 0.01);

    return {
      duration,
      delay: 300,
      tick: (t: number) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }

  const dispatch = createEventDispatcher();
  export let message: string;
</script>

<span
  in:typewriter
  on:introend={() => {
    dispatch('end');
  }}
>
  {message}
</span>
