import { writable, type Writable } from "svelte/store";


type Origin = "clipboard" | "upload";


export class PictureData {
  src: string = $state("");
  origin: Origin = $state("clipboard");

  constructor(src: string, origin: Origin)
  {
    this.src = src;
    this.origin = origin;
  }
}


export const pict: Writable<PictureData | null> = writable(null);
