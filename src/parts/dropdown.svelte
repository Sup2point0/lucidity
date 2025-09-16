<!-- @component Dropdown -->

<script lang="ts">

interface Props {
  value: any;
  options: any[];
  label: string;
}

let { value = $bindable(), options, label }: Props = $props();

</script>


<div class="field">
  <label for={label}>
    {@html label}
  </label>

  <select id={label} bind:value>
    {#each options as option}
      <option> {option} </option>
    {/each}
  </select>
</div>


<style lang="scss">

.field {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
