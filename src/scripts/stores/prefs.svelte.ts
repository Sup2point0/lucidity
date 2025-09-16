import { writable } from "svelte/store";


export class Preferences
{
  confirm_before_paste: boolean = $state(true);
  backdrop_style: "dots" | "grid" = $state("dots");
  pane_width: "default" | "min" | "max" = $state("default");

  reset()
  {
    this.confirm_before_paste = true;
    this.backdrop_style = "dots";
    this.pane_width = "default";
  }
}


export const prefs = writable(new Preferences());
