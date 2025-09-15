<script lang="ts">
  
import "#styles/essence.scss";

import Window from "./window.svelte";
import Controls from "./controls.svelte";

</script>


<main>
  <div class="window">
    <Window />
  </div>

  <div class="controls">
    <Controls />
  </div>
</main>


<style lang="scss">

main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
}

.window {
  // flex-grow: 3;
  width: 80vw;
}

.controls {
  // flex-grow: 2;
  width: 20vw;
  padding: 1rem 1.5rem;
  overflow-y: auto;
  background: rgb(black, 5%);
}

</style>
