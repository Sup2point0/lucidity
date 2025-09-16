<!-- @component Upload -->

<script lang="ts">

import { pict, toasts } from "#scripts/stores";
import { PictureData } from "#scripts/stores/pict.svelte";

</script>


<input type="file"
  accept="image/*"
  onchange={e => {
    let files = e.target?.files;

    if (files?.length) {
      $pict = new PictureData(URL.createObjectURL(files[0]), "upload");
      $toasts.new_toast({
        kind: "success", text: "Uploaded image from device"
      });
    }
  }}
/>


<style lang="scss">



</style>
