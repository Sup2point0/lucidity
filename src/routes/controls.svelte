<!-- @component Controls-->

<script lang="ts">

import { pict, view, effects, prefs, toasts } from "#scripts/stores";
import { Viewport, PictureEffects } from "#scripts/types";

import Upload from "#parts/upload.svelte";
import Clicky from "#parts/clicky.svelte";
import Slider from "#parts/slider.svelte";
import Checkbox from "#parts/checkbox.svelte";
import Dropdown from "#parts/dropdown.svelte";

</script>


<div id="back"></div>

<aside class="controls">
  <section>
    <header>
      <h2> Image </h2>

      <Clicky text="Clear" action={() => {
        $pict = null;
        $toasts.new_toast({
          kind: "success", text: "Cleared image."
        });
      }} />
    </header>

    <div class="fields">
      <Upload />
    </div>
  </section>

  <section>
    <header>
      <h2> Viewport </h2>

      <Clicky text="Reset" action={() => {
        $view.reset();
        $toasts.new_toast({
          kind: "success", text: "Reset viewport."
        });
      }} />
    </header>

    <div class="fields">
      <Slider label="Zoom"
        bind:value={$view.zoom}
        min={10}
        max={200}
        reset={Viewport.defaults.zoom}
        unit="%"
      />
    </div>
  </section>

  <section>
    <header>
      <h2> Effects </h2>

      <Clicky text="Reset" action={() => {
        $effects.reset();
        $toasts.new_toast({
          kind: "success", text: "Reset image effects."
        });
      }} />
    </header>
    
    <div class="fields">
      <Slider label="Blur"
        bind:value={$effects.blur}
        min={0}
        max={20}
        reset={PictureEffects.defaults.blur}
        unit="px"
      />

      <Slider label="Brightness"
        bind:value={$effects.brightness}
        min={0}
        max={200}
        reset={PictureEffects.defaults.brightness}
        unit="%"
      />

      <Slider label="Hue"
        bind:value={$effects.hue}
        min={0}
        max={360}
        reset={PictureEffects.defaults.hue}
        unit="°"
      />
    </div>
  </section>

  <section>
    <header>
      <h2> Preferences </h2>

      <Clicky text="Reset" action={() => {
        $prefs.reset();
        $toasts.new_toast({
          kind: "success", text: "Reset preferences to defaults."
        });
      }} />
    </header>

    <div class="fields">
      <Checkbox label="Confirm before paste"
        bind:value={$prefs.confirm_before_paste}
      />

      <Dropdown label="Backdrop style"
        bind:value={$prefs.backdrop_style}
        options={{
          "dots": "Dotted",
          "grid": "Gridded",
        }}
      />

      <Dropdown label="Pane width"
        bind:value={$prefs.pane_width}
        options={{
          "default": "Default",
          "min": "Minimised",
          "max": "Expanded",
        }}
      />
    </div>
  </section>

  <footer>
    Lucidity by <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a> <br>
    built with <a target="_blank" href="https://svelte.dev/">Svelte</a>/<a target="_blank" href="https://svelte.dev/docs/kit/">Kit</a> <br>
    source code on <a target="_blank" href="https://github.com/Sup2point0/lucidity">GitHub</a>
  </footer>
</aside>


<style lang="scss">

@use 'sass:color';


aside.controls {
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


section {
  padding-bottom: 2.5rem;

  header {
    padding-bottom: 1.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    h2 {
      @include font-ui;
      font-weight: 300;
      font-size: 150%;
    }
  }

  .fields {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }
}

footer {
  font-size: 80%;
  line-height: 160%;
  text-align: right;

  a {
    color: $col-purp;
    text-decoration: none;

    &:hover, &:focus-visible {
      color: color.adjust($col-pink, $lightness: -0.1);
      text-decoration: underline;
    }
  }
}

</style>
