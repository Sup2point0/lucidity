import { writable } from "svelte/store";


export class PictureEffects
{
  blur: number = $state(0);
}


export const effects = writable(new PictureEffects());
