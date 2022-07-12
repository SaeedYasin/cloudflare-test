<script lang="ts">
  // import Home from '$lib/home/index.svelte';
</script>

<main>
  <slot />
  <!-- <Home /> -->
</main>

<style lang="scss">
  @use './src/scss/base' as *;

  main {
    @include flex_center;
  }
</style>
