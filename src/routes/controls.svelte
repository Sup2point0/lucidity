<!-- @component Controls-->

<script lang="ts">

import { effects, toasts } from "#scripts/stores";

import Clicky from "#parts/clicky.svelte";
import Slider from "#parts/slider.svelte";

</script>


<div id="back"></div>

<div class="controls">
  <section>
    <header>
      <h2> Effects </h2>

      <Clicky text="Reset" action={() => {
        $effects.reset();
        $toasts.new_toast({
          kind: "success", text: "Reset image effects!"
        })
      }} />
    </header>
    
    <div class="fields">
      <Slider label="Blur"
        bind:value={$effects.blur}
        min={0}
        max={20}
        unit="px"
      />

      <Slider label="Brightness"
        bind:value={$effects.brightness}
        min={0}
        max={200}
        unit="%"
      />

      <Slider label="Hue"
        bind:value={$effects.hue}
        min={0}
        max={360}
        unit="°"
      />
    </div>
  </section>
</div>


<style lang="scss">

.controls {
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.5rem;
  position: relative;
  overflow-y: auto;
  background: rgb(white, 80%);
  transition: background 0.1s ease-out;

  &:hover {
    background: rgb(white, 75%);
  }
}

#back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    to bottom in oklch,
    $col-orange,
    $col-pink
  );
  box-shadow: 0 0 5px rgb(black, 8%);
}


header {
  padding-bottom: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  h2 {
    @include font-ui;
    font-weight: 500;
    font-size: 150%;
  }
}


.fields {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  
  section {
  }
}

</style>
