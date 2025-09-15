<!-- @component Toast -->

<script lang="ts">

import { toasts } from "#scripts/stores";
import type { Toast } from "#scripts/types";

import { scale, slide } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  toast: Toast;
}

let { toast }: Props = $props();

</script>


<div class="toast"
  in:slide={{ duration: 500, easing: expoOut }}
  out:slide={{ duration: 500, easing: expoOut, delay: 250 }}
>
  <button class={toast.kind}
    onclick={() => $toasts.clear_toast(toast.id)}
    in:scale={{ duration: 500, start: 0.6, easing: expoOut, delay: 250 }}
    out:scale={{ duration: 500, start: 0.9, easing: expoOut }}
  >
    {@html toast.text}
  </button>
</div>


<style lang="scss">

.toast {
  padding: 0.25rem 0;
}

button {
  padding: 0.5em 1em;
  @include font-ui;
  font-size: 100%;
  background: rgb(white, 80%);
  border: 1px solid rgb(black, 10%);
  border-radius: $border-radius;
  box-shadow: 0 2px 4px rgb(black, 5%);
  backdrop-filter: blur(8px);
  transition: #{trans()};

  &:hover {
    cursor: pointer;
    background: rgb(white, 90%);
  }
}

</style>
