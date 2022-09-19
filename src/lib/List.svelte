<script lang="ts">
  import { registerElement } from '$lib/stores/elements';
  import { checked } from '$lib/stores/stores';
  import type { Cask } from 'src/routes/+page.server';

  export let title: string;
  export let casks: Cask[];
</script>

<section class="list">
  <h2>{title}</h2>
  {#each casks as cask (cask.name)}
    <div class="item bg-white border">
      <input
        id={cask.name}
        name={cask.name}
        value={cask.name}
        hidden
        type="checkbox"
        bind:group={$checked}
      />
      <label use:registerElement={{ key: cask.name }} for={cask.name}>
        {cask.name} - {cask.installs}
      </label>
    </div>
  {/each}
  <article />
</section>

<style>
  .item {
    padding: 0.5em 1em;
    background-color: white;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;
  }

  .item:has(:checked) {
    color: white;
    background-color: rgb(64, 216, 69);
  }

  .list {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
  }
</style>
