<!-- @component Window -->

<script lang="ts">

import { pict, effects } from "#scripts/stores";
import { load_pict_from_clipboard } from "#scripts/load";

import { onMount } from "svelte";


let pict_view: HTMLImageElement;
let reader: FileReader;

onMount(() => {
  reader = new FileReader();
  
  reader.onload = e => {
    let src = e.target?.result;

    if (src && typeof(src === "string")) {
      pict_view.src = src as string;
    }
  };
});

</script>


<svelte:document onpaste={e => {
  let data = load_pict_from_clipboard(e, reader);

  if (data) {
    $pict = data;
  }
}} />

<div class="window">
  <img bind:this={pict_view}
    alt=""
    src={$pict}
    style:filter="
      hue-rotate({$effects.hue}deg)
      blur({$effects.blur}px)
      brightness({$effects.brightness}%)
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
  background-image: radial-gradient(circle, #ccc 1px, transparent 1px);

  img {
    max-width: min(100%, 100vw);
    max-height: min(100%, 100vh);
  }
}

</style>
