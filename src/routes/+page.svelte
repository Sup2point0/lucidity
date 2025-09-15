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

main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
}

.left {
  // flex-grow: 3;
  width: 80vw;
}

.right {
  // flex-grow: 2;
  width: 20vw;
  position: relative;
}

.toasts {
  position: fixed;
  left: 50%;
  bottom: 1rem;
  display: flex;
  flex-flow: column nowrap;
  transform: translateX(-50%);
}

</style>
