<!-- @component Window -->

<script lang="ts">

import { view, pict, effects, prefs, toasts } from "#scripts/stores";
import { PictureData } from "#scripts/stores/pict.svelte";
import { load_pict_from_clipboard } from "#scripts/load";

import Instructions from "./instructions.svelte";

import { onMount } from "svelte";
import { scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


let reader: FileReader;

onMount(() => {
  reader = new FileReader();

  reader.onloadstart = e => {
    if ($pict) {
      $pict.src = null;
    }
  };
  
  reader.onload = e => {
    let src = e.target?.result;

    if (src && typeof(src === "string")) {
      $pict = new PictureData(src as string, "clipboard");
      
      $toasts.new_toast({
        kind: "success", text: "Pasted from clipboard"
      });
    }
  };
});

</script>


<svelte:document onpaste={e => {
  if ($prefs.confirm_before_paste && $pict !== null) {
    if (!window.confirm("Paste image from clipboard? This will overwrite the current image.")) return;
  }

  load_pict_from_clipboard(e, reader);
}} />

<div class="window {$prefs.backdrop_style}">
  {#key $pict?.src}
    <img
      alt=""
      src={$pict?.src}
      style:filter="
        hue-rotate({$effects.hue}deg)
        blur({$effects.blur}px)
        brightness({$effects.brightness}%)
      "
      style:transform="
        scale({$view.zoom}%)
      "
      in:scale={{ duration: 500, start: 0.95, easing: expoOut }}
      out:scale={{ duration: ($pict === null) ? 500 : 0, start: 0.95, easing: expoOut }}
    />
  {/key}

  {#if $pict === null}
    <Instructions />
  {/if}
</div>


<style lang="scss">

@property --col {
  syntax: '<color>';
  initial-value: 'transparent';
  inherits: false;
}

.window {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-size: 1rem 1rem;
  --col: #ddd;
  background-image: radial-gradient(circle, var(--col) 1px, transparent 1px);
  transition: --col 0.1s ease-out;

  &:hover {
    --col: #ccc;
  }

  &.grid {
    --col: #eee;
    background-image:
      linear-gradient(to right, var(--col) 1px, transparent 1px),
      linear-gradient(to bottom, var(--col) 1px, transparent 1px);
    
    &:hover {
      --col: #eaeaea;
    }
  }
}

img {
  max-width: min(95%, 100vw);
  max-height: min(95%, 100vh);
}

</style>
