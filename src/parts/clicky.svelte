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

button {
  padding: 0.2em 0.5em;
  @include font-ui;
  font-size: 100%;
  color: $col-trit-dark;
  background: oklch(0.8 0.1202 57.71 / 30%);
  border: none;
  border-radius: $border-radius;
  outline: none;
  transition: #{trans()};

  &:hover, &:focus-visible {
    cursor: pointer;
    padding-left: 0.6em;
    padding-right: 0.6em;
    background: oklch(0.8 0.1202 57.71 / 60%);
  }

  &:active {
    transform: scale(92%);
  }
}

</style>
