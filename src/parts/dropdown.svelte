<!-- @component Dropdown -->

<script lang="ts">

interface Props {
  value: any;
  options: {
    [key: string]: string;
  };
  label: string;
}

let { value = $bindable(), options, label }: Props = $props();

</script>


<div class="field">
  <label for={label}>
    {@html label}
  </label>

  <select id={label} bind:value>
    {#each Object.entries(options) as [value, label]}
      <option {value}> {@html label} </option>
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

select {
  height: 2em;
  @include font-ui;
  font-size: 80%;
  background: rgb(white, 50%);
  border: 1px solid #ccc;
  border-radius: $border-radius;

  &:hover {
    cursor: pointer;
    background: rgb(white, 80%);
  }

  &:active {
    background: rgb(#ccc, 20%);
  }
}

</style>
