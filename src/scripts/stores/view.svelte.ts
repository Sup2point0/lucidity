import { writable } from "svelte/store";

import { Resettable } from "#scripts/types";


export class Viewport extends Resettable
{
  zoom: number = $state(100);

  reset()
  {
    this.zoom = 100;
  }
}


export const view = writable(new Viewport());
