<!-- @component Controls-->

<script lang="ts">

import { effects } from "#scripts/stores";

import Slider from "#parts/slider.svelte";

</script>


<div class="controls">
  <section>
    <h2> Effects </h2>
    
    <Slider label="Blur"
      bind:value={$effects.blur}
      min={0}
      max={20}
    />
  </section>
</div>


<style lang="scss">

.controls {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

section {
  h2 {
    padding-bottom: 0.5em;
  }
}

</style>
