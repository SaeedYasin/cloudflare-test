<script lang="ts">
  export let open = false;
</script>


<span>
  <label id="navbar-hamburger-label" for="navbar-hamburger-input" class="sr-only">
    Toggle Menu
  </label>
  <input id="navbar-hamburger-input" type="checkbox" bind:checked={open} on:change />
  <div class="hamburger-lines">
    <span class="line line1" />
    <span class="line line2" />
    <span class="line line3" />
  </div>
</span>

<style lang="scss">
  @use './src/scss/base' as *;

  span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    margin: 0;
  }

  input[type='checkbox'] {
    grid-area: 1/-1;
    z-index: 1;
    height: 23px;
    width: 27px;
    opacity: 0;
    cursor: pointer;
  }

  .hamburger-lines {
    grid-area: 1/-1;
    height: 21px;
    width: 25.75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger-lines .line {
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: var(--navbar-text-color);
  }

  .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.2s ease-in-out;
  }

  .hamburger-lines .line2 {
    transition: transform 0.07s ease-in-out;
  }

  .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.2s ease-in-out;
  }

  input[type='checkbox']:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  input[type='checkbox']:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  input[type='checkbox']:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  @include onlyDesktop {
    span {
      display: none;
    }
  }
</style>
