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

<div class="img-container">
  <img bind:this={pict_view}
    alt=""
    src={$pict}
    style:filter="
      blur({$effects.blur}px)
    "
  />
</div>


<style lang="scss">

.img-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: min(100%, 100vw);
    max-height: min(100%, 100vh);
  }
}

</style>
