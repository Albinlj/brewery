<span class="caret" />

<style>
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
