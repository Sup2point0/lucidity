import { writable } from "svelte/store";


export class Preferences
{
  confirm_before_paste: boolean = $state(true);
  backdrop_style: "dots" | "grid" = $state("dots");

  reset()
  {
    this.confirm_before_paste = true;
    this.backdrop_style = "dots";
  }
}


export const prefs = writable(new Preferences());
