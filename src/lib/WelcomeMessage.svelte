<script lang="ts">
  import { fly } from 'svelte/transition';

  let message: string =
    'Choose casks to install. Press the copy button. Paste in terminal. ';
</script>

<span class="blue">❯</span>
<span in:fly={{ y: -100, duration: 2000 }}>{message}</span>

<style>
  .intro {
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
</style>
