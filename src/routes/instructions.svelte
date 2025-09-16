<!-- @component Instructions -->

<script lang="ts">

import Upload from "#parts/upload.svelte";

import { scale } from "svelte/transition";
import { expoOut } from "svelte/easing";

</script>


<div class="instructions"
  in:scale={{ duration: 500, start: 0.95, easing: expoOut }}
>
  <p>
    <code>CTRL</code> + <code>V</code> to paste image from clipboard
  </p>
  
  <small>
    or
  </small>
  
  <div class="upload">
    <Upload />
  </div>

  <p>
    Upload from your device
  </p>
</div>


<style lang="scss">

.instructions {
  padding: 2rem 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 0.5rem;

  text-align: center;
  background: rgb(white, 80%);
  backdrop-filter: blur(4px);
  border: 1px solid #ddd;
  border-radius: $border-radius;
  box-shadow: 0 3px 5px rgb(black, 10%);
  transform: translateX(-50%) translateY(-50%);
}

small {
  padding: 1em 0;
  color: rgb(black, 40%);
}

code {
  padding: 0.2em 0.5em;
  background: rgb(black, 7%);
  border-radius: $border-radius;
}

.upload {
  display: flex;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: $border-radius;
}

</style>
