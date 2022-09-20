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
  @keyframes shadow {
    0% {
      box-shadow: var(--shadow-1);
    }
    50% {
      box-shadow: var(--shadow-none);
    }
    100% {
      box-shadow: var(--shadow-1);
    }
  }

  .list {
    --shadow-1: 0px 5px 5px -1px rgba(0, 0, 0, 0.1);
    --shadow-2: 0px 10px 5px -3px rgba(0, 0, 0, 0.1) inset;
    --shadow-none: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);

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
    }

    align-items: center;

    padding: 0.5em 1em;
    border-radius: 0.3em;

    cursor: pointer;
    user-select: none;

    transition: all 0.1s;
    position: relative;
    box-shadow: var(--shadow-1), 0;
    background-color: hsl(0, 0%, 13%);
    color: hsl(0, 0%, 70%);
  }

  .selected {
    background-color: var(--color-accent);
    color: hsl(0, 0%, 10%);
  }

  .name {
    color: hsl(0, 0%, 80%);
    grid-area: a;
    font-weight: 400;
    font-size: 1.125rem;
    margin: unset;
  }

  .description {
    grid-area: b;
    font-weight: 300;
  }

  .installs {
    grid-area: c;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: hsl(0, 0%, 60%);
  }

  .installs :last-child {
    font-size: 0.8em;
    color: hsl(0, 0%, 40%);
  }
</style>
