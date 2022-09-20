<script lang="ts">
  import { registerElement } from '$lib/stores/elements';
  import { checked } from '$lib/stores/stores';
  import type { Cask } from 'src/routes/+page.server';

  export let casks: Cask[];
</script>

<section class="list">
  {#each casks as cask (cask.token)}
    <label
      for={cask.token}
      class="item"
      class:selected={$checked.includes(cask.token)}
    >
      <input
        id={cask.token}
        name={cask.token}
        value={cask.token}
        hidden
        type="checkbox"
        bind:group={$checked}
      />
      <h2 class="name" use:registerElement={{ key: cask.token }}>
        {cask.name}
      </h2>
      <span class="description">
        {cask.description}
      </span>
      <div class="installs">
        <span>
          {cask.installs.toLocaleString()}
        </span>
        <span>monthly installs</span>
      </div>
    </label>
  {/each}
  <article />
</section>

<style lang="postcss">
  .list {
    --shadow-1: 0px 5px 5px -1px rgba(0, 0, 0, 0.1);
    --shadow-2: 0px 10px 5px -3px rgba(0, 0, 0, 0.1) inset;

    margin: 1rem;
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }

  .item {
    grid-column: 1 / 4;

    display: grid;
    column-gap: 1em;
    grid-template-areas:
      'a c'
      'b c';

    @media (min-width: 800px) {
      grid-template-columns: 2fr 2fr 1fr;
      grid-template-areas: 'a b c';
      color: greenyellow;
      color: #fcffcf;
    }

    align-items: center;

    padding: 0.5em 2em;
    border-radius: 0.5em;

    cursor: pointer;
    user-select: none;

    transition: all 0.1s;
    position: relative;
    box-shadow: var(--shadow-1);
    background-color: hsl(0, 0%, 9%);
    color: var(--color-type-50);
  }

  .selected {
    /* background-color: var(--color-green);
    --color-type-10: hsl(0, 0%, 10%);
    --color-type-20: hsl(0, 0%, 10%);
    --color-type-30: hsl(0, 0%, 10%);
    --color-type-40: hsl(0, 0%, 10%);
    --color-type-50: hsl(0, 0%, 10%);
    --color-type-60: hsl(0, 0%, 10%);
    --color-type-70: hsl(0, 0%, 10%);
    --color-type-80: hsl(0, 0%, 10%);
    --color-type-90: hsl(0, 0%, 10%); */
    /* border: 0.5px solid var(--color-yellow); */

    background-color: hsl(0, 0%, 12%);
  }
  /* .selected .name {
    color: var(--color-yellow);
  }
  .selected .description {
    color: var(--color-yellow);
  }
  .selected .installs {
    color: var(--color-yellow);
  } */

  .name {
    color: var(--color-type-90);
    grid-area: a;
    font-weight: 400;
    font-size: 1.125rem;
    margin: unset;
  }

  .description {
    color: var(--color-type-50);
    grid-area: b;
    font-weight: 300;
  }

  .installs {
    grid-area: c;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: var(--color-type-80);
  }

  .installs :last-child {
    font-size: 0.8em;
    color: var(--color-type-40);
  }
</style>
