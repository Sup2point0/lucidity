<!-- @component Checkbox -->

<script lang="ts">

interface Props {
  value: any;
  label: string;
}

let { value = $bindable(), label }: Props = $props();

</script>


<div class="field">
  <label for={label}>
    {@html label}
  </label>

  <input type="checkbox"
    id={label}
    bind:checked={value}
  />
</div>


<style lang="scss">

.field {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  gap: 0.2rem;
}

label {
  @include font-ui;

  &:hover {
    cursor: pointer;
  }
}

</style>
