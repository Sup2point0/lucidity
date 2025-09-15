<script lang="ts">
  
import "#styles/essence.scss";

import Window from "./window.svelte";
import Controls from "./controls.svelte";

</script>


<main>
  <div class="left">
    <Window />
  </div>

  <div class="right">
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

.left {
  // flex-grow: 3;
  width: 80vw;
}

.right {
  // flex-grow: 2;
  width: 20vw;
  position: relative;
}

</style>
