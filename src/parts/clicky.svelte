<!-- @component Clicky -->

<script lang="ts">

interface Props {
  text: string;
  action: () => void;
}

let { text, action }: Props = $props();

</script>


<button onclick={action}>
  {@html text}
</button>


<style lang="scss">

@use 'sass:color';


button {
  padding: 0.2em 0.5em;
  @include font-ui;
  font-size: 100%;
  color: white;
  background: color.change($col-purp, $alpha: 0.8);
  border: none;
  border-radius: $border-radius;
  outline: none;
  box-shadow: 0 2px 4px rgb(black, 10%);
  transition: #{trans()};

  &:hover, &:focus-visible {
    cursor: pointer;
    padding-left: 0.6em;
    padding-right: 0.6em;
    background: color.adjust($col-purp, $lightness: -0.05);
  }

  &:active {
    background: color.adjust($col-purp, $lightness: -0.15);
    transform: scale(92%);
  }
}

</style>
