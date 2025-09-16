import { writable } from "svelte/store";


export class Viewport
{
  zoom: number = $state(100);

  reset()
  {
    this.zoom = 100;
  }
}


export const view = writable(new Viewport());
