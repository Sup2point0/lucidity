<!-- @component Slider -->

<script lang="ts">

interface Props {
  label: string;
  value: any;
  min?: number;
  max?: number;
  unit?: string;
}

let { label, value = $bindable(), min = 0, max = 1, unit }: Props = $props();

</script>


<div class="field">
  <div class="upper">
    <label for={label}>
      {@html label}
    </label>

    <div class="input-container">
      <input type="number"
        id={label}
        bind:value
      />

      {#if unit}
        <div class="unit">
          {@html unit}
        </div>
      {/if}
    </div>
  </div>

  <div class="lower">
    <input type="range"
      bind:value
      {min} {max}
    />
  </div>
</div>


<style lang="scss">

.field {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 0.2rem;
}


.upper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  label {
    @include font-ui;

    &:hover {
      cursor: pointer;
    }
  }

  .input-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;

    input[type="number"] {
      appearance: none;
      width: 4em;
      padding: 0.1em 0.5em;

      @include font-flavour;
      font-size: 100%;
      background: rgb(black, 7%);
      border: none;
      border-radius: $border-radius;
      outline: none;
      transition: #{trans()};

      &:hover {
        background: rgb(black, 12%);
      }

      &:active {
        background: rgb(black, 16%);
        transform: scale(97%);
      }
    }

    .unit {
      display: inline-block;
      width: 1.5em;
      padding-left: 0.25em;
      @include font-ui;
    }
  }

  input::-webkit-inner-spin-button, input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}


.lower {
  input[type="range"] {
    width: 100%;
  }
}

</style>
