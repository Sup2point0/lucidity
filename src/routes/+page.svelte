<script lang="ts">
  
import "#styles/essence.scss";

import { toasts } from "#scripts/stores";

import Window from "./window.svelte";
import Controls from "./controls.svelte";

import Toast from "#parts/toast.svelte";

</script>


<main>
  <div class="left">
    <Window />
  </div>

  <div class="right">
    <Controls />
  </div>
</main>

<div class="toasts">
  {#each $toasts.active as toast (toast.id)}
    <Toast {toast} />
  {/each}
</div>


<style lang="scss">

$controls-max-width: 24rem;

main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
}

.left {
  // flex-grow: 3;
  min-width: calc(100vw - $controls-max-width);
  resize: horizontal;
  overflow: auto;
}

.right {
  flex: 1;
  // flex-grow: 2;
  min-width: 16rem;
  max-width: $controls-max-width;
  position: relative;
}

.toasts {
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transform: translateX(-50%);
}

</style>
