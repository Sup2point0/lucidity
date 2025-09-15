import { writable } from "svelte/store";


export class PictureEffects
{
  blur: number = $state(0);
  brightness: number = $state(100);
  hue: number = $state(0);

  reset(): void
  {
    this.blur = 0;
    this.brightness = 100;
    this.hue = 0;
  }
}


export const effects = writable(new PictureEffects());
