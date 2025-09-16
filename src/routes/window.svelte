<!-- @component Window -->

<script lang="ts">

import { view, pict, effects, toasts } from "#scripts/stores";
import { PictureData } from "#scripts/stores/pict.svelte";
import { load_pict_from_clipboard } from "#scripts/load";

import { onMount } from "svelte";


let pict_view: HTMLImageElement;
let reader: FileReader;

onMount(() => {
  reader = new FileReader();
  
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


<svelte:document onpaste={e => load_pict_from_clipboard(e, reader)} />

<div class="window">
  <img bind:this={pict_view}
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
  />
</div>


<style lang="scss">

.window {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 1rem 1rem;
  --col: #ddd;
  background-image: radial-gradient(circle, var(--col) 1px, transparent 1px);

  &:hover {
    --col: #ccc
  }

  img {
    max-width: min(95%, 100vw);
    max-height: min(95%, 100vh);
  }
}

</style>
