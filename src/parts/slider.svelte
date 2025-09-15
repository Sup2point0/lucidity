<!-- @component Slider -->

<script lang="ts">

interface Props {
  label: string;
  value: any;
  min?: number;
  max?: number;
}

let { label, value = $bindable(), min = 0, max = 1 }: Props = $props();

</script>


<div class="control">
  <div class="upper">
    <label for={label}>
      {@html label}
    </label>
  </div>

  <div class="lower">
    <input type="range"
      bind:value
      {min} {max}
    />
  </div>
</div>


<style lang="scss">

.control {
  display: flex;
  flex-flow: column nowrap;
}

</style>
